// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

import { Test } from "forge-std/Test.sol";
import { LicenseToken } from "@storyprotocol/core/LicenseToken.sol";
import { LicensingModule } from "@storyprotocol/core/modules/licensing/LicensingModule.sol";
import { IPAssetRegistry } from "@storyprotocol/core/registries/IPAssetRegistry.sol";
import { LicenseRegistry } from "@storyprotocol/core/registries/LicenseRegistry.sol";

import { IPALicenseToken } from "../src/IPALicenseToken.sol";
import { StoryGame } from "../src/StoryGame.sol";

// Run this test: forge test --fork-url https://testnet.storyrpc.io/ --match-path test/IPARemix.t.sol
contract IPARemixTest is Test {
    address internal alice = address(0xa11ce);
    address internal bob = address(0xb0b);

    // For addresses, see https://docs.storyprotocol.xyz/docs/deployed-smart-contracts
    // Protocol Core - IPAssetRegistry
    address internal ipAssetRegistryAddr = 0x1a9d0d28a0422F26D31Be72Edc6f13ea4371E11B;
    // Protocol Core - LicensingModule
    address internal licensingModuleAddr = 0xd81fd78f557b457b4350cB95D20b547bFEb4D857;
    // Protocol Core - LicenseRegistry
    address internal licenseRegistryAddr = 0xedf8e338F05f7B1b857C3a8d3a0aBB4bc2c41723;
    // Protocol Core - LicenseToken
    address internal licenseTokenAddr = 0xc7A302E03cd7A304394B401192bfED872af501BE;
    // Protocol Core - PILicenseTemplate
    address internal pilTemplateAddr = 0x0752f61E59fD2D39193a74610F1bd9a6Ade2E3f9;

    IPAssetRegistry public ipAssetRegistry;
    LicensingModule public licensingModule;
    LicenseRegistry public licenseRegistry;
    LicenseToken public licenseToken;

    IPALicenseToken public ipaLicenseToken;
    StoryGame public storyGame;

    function setUp() public {
        ipAssetRegistry = IPAssetRegistry(ipAssetRegistryAddr);
        licensingModule = LicensingModule(licensingModuleAddr);
        licenseRegistry = LicenseRegistry(licenseRegistryAddr);
        licenseToken = LicenseToken(licenseTokenAddr);
        ipaLicenseToken = new IPALicenseToken(ipAssetRegistryAddr, licensingModuleAddr, pilTemplateAddr);
        storyGame = StoryGame(ipaLicenseToken.STORY_GAME());

        vm.label(address(ipAssetRegistryAddr), "IPAssetRegistry");
        vm.label(address(licensingModuleAddr), "LicensingModule");
        vm.label(address(licenseRegistryAddr), "LicenseRegistry");
        vm.label(address(licenseTokenAddr), "LicenseToken");
        vm.label(address(pilTemplateAddr), "PILicenseTemplate");
        vm.label(address(storyGame), "StoryGame NFT");
        vm.label(address(0x000000006551c19487814612e58FE06813775758), "ERC6551Registry");
    }

    function test_remixIp() public {
        //
        // Alice mints License Tokens for Bob.
        //

        uint256 expectedTokenId = storyGame.nextTokenId();
        address expectedIpId = ipAssetRegistry.ipId(block.chainid, address(storyGame), expectedTokenId);

        vm.prank(alice);
        (address parentIpId, uint256 tokenId, uint256 startLicenseTokenId) = ipaLicenseToken.mintLicenseToken({
            ltAmount: 2,
            ltRecipient: bob
        });

        assertEq(parentIpId, expectedIpId);
        assertEq(tokenId, expectedTokenId);
        assertEq(storyGame.ownerOf(tokenId), alice);

        assertEq(licenseToken.ownerOf(startLicenseTokenId), bob);
        assertEq(licenseToken.ownerOf(startLicenseTokenId + 1), bob);

        //
        // Bob uses the minted License Token from Alice to register a derivative IP.
        //

        vm.prank(address(ipaLicenseToken)); // need to prank to mint storyGame
        tokenId = storyGame.mint(address(bob));
        address childIpId = ipAssetRegistry.register(block.chainid, address(storyGame), tokenId);

        uint256[] memory licenseTokenIds = new uint256[](1);
        licenseTokenIds[0] = startLicenseTokenId;

        vm.prank(bob);
        licensingModule.registerDerivativeWithLicenseTokens({
            childIpId: childIpId,
            licenseTokenIds: licenseTokenIds,
            royaltyContext: "" // empty for PIL
        });

        assertTrue(licenseRegistry.hasDerivativeIps(parentIpId));
        assertTrue(licenseRegistry.isParentIp(parentIpId, childIpId));
        assertTrue(licenseRegistry.isDerivativeIp(childIpId));
        assertEq(licenseRegistry.getDerivativeIpCount(parentIpId), 1);
        assertEq(licenseRegistry.getParentIpCount(childIpId), 1);
        assertEq(licenseRegistry.getParentIp({ childIpId: childIpId, index: 0 }), parentIpId);
        assertEq(licenseRegistry.getDerivativeIp({ parentIpId: parentIpId, index: 0 }), childIpId);
    }
}
