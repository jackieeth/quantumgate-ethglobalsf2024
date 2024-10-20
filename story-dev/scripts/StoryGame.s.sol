// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

import {Script} from "forge-std/Script.sol";
import {StoryGame} from "../src/StoryGame.sol";

contract MyScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        StoryGame nft = new StoryGame("StoryGame NFT", "SGNFT");

        vm.stopBroadcast();
    }
}
