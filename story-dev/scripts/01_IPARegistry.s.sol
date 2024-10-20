// SPDX-License-Identifier: UNLICENSED
//
// forge script scripts/IPARegistry.s.sol:MyScript --rpc-url https://testnet.storyrpc.io --broadcast
// 
pragma solidity ^0.8.23;

import {Script} from "forge-std/Script.sol";
import {IPARegistrar} from "../src/IPARegistrar.sol";


contract MyScript is Script {
    function run() external {

        /// find latest deployment addresses at https://docs.story.foundation/docs/deployed-smart-contracts

        address IPAssetRegistryAddress = 0x1a9d0d28a0422F26D31Be72Edc6f13ea4371E11B;
        address registrationWorkflowsAddress = 0x601C24bFA5Ae435162A5dC3cd166280C471d16c8;
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        IPARegistrar reg = new IPARegistrar(IPAssetRegistryAddress, registrationWorkflowsAddress);

        reg.mintIp();
        reg.spgMintIp();

        vm.stopBroadcast();
    }
}
