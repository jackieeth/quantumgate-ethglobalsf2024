// SPDX-License-Identifier: UNLICENSED
//
// forge script scripts/03_IPALicenseToken.s.sol:MyScript --rpc-url https://testnet.storyrpc.io --broadcast
// 
pragma solidity ^0.8.23;

import {Script} from "forge-std/Script.sol";
import {IPALicenseToken} from "../src/IPALicenseToken.sol";


contract MyScript is Script {
    function run() external {

        /// find latest deployment addresses at https://docs.story.foundation/docs/deployed-smart-contracts

        address IPAssetRegistryAddress = 0x1a9d0d28a0422F26D31Be72Edc6f13ea4371E11B;

        address LicensingModuleAddress = 0xd81fd78f557b457b4350cB95D20b547bFEb4D857;

        address PilTemplateAddress = 0x0752f61E59fD2D39193a74610F1bd9a6Ade2E3f9;

        address receiverAddress = 0x0014f4DDCa262869882Fe68Df242A9242F839bAF;
        
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        IPALicenseToken regtoken = new IPALicenseToken(
            IPAssetRegistryAddress, 
            LicensingModuleAddress,
            PilTemplateAddress
        );

        regtoken.mintLicenseToken(1, receiverAddress);
        regtoken.mintLicenseToken(1, receiverAddress);
        regtoken.mintLicenseToken(1, receiverAddress);

        vm.stopBroadcast();
    }
}
