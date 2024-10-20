// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

import { IPAssetRegistry } from "@storyprotocol/core/registries/IPAssetRegistry.sol";
import { LicensingModule } from "@storyprotocol/core/modules/licensing/LicensingModule.sol";
import { PILicenseTemplate } from "@storyprotocol/core/modules/licensing/PILicenseTemplate.sol";

import { StoryGame } from "./StoryGame.sol";

/// @notice Attach a Selected Programmable IP License Terms to an IP Account.
contract IPALicenseTerms {
    IPAssetRegistry public immutable IP_ASSET_REGISTRY;
    LicensingModule public immutable LICENSING_MODULE;
    PILicenseTemplate public immutable PIL_TEMPLATE;
    StoryGame public immutable STORY_GAME;

    constructor(address ipAssetRegistry, address licensingModule, address pilTemplate) {
        IP_ASSET_REGISTRY = IPAssetRegistry(ipAssetRegistry);
        LICENSING_MODULE = LicensingModule(licensingModule);
        PIL_TEMPLATE = PILicenseTemplate(pilTemplate);
        // Create a new Simple NFT collection
        STORY_GAME = new StoryGame("StoryGame NFT", "SGNFT");
    }

    function attachLicenseTerms() external returns (address ipId, uint256 tokenId) {
        // First, mint an NFT and register it as an IP Account.
        // Note that first we mint the NFT to this contract for ease of attaching license terms.
        // We will transfer the NFT to the msg.sender at last.
        tokenId = STORY_GAME.mint(address(this));
        ipId = IP_ASSET_REGISTRY.register(block.chainid, address(STORY_GAME), tokenId);

        // Then, attach a selection of license terms from the PILicenseTemplate, which is already registered.
        // Note that licenseTermsId = 2 is a random selection of license terms already registered by another user.
        LICENSING_MODULE.attachLicenseTerms(ipId, address(PIL_TEMPLATE), 2);

        // Finally, transfer the NFT to the msg.sender.
        STORY_GAME.transferFrom(address(this), msg.sender, tokenId);
    }
}
