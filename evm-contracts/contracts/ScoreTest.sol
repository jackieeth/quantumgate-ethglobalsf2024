// SPDX-License-Identifier: MIT

//
// ScoreTest.sol
//

pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ScoreTest is ERC20, Ownable {

    uint256 public constant maxSupply = 10 ** 9 * 10 ** 18; // 1B max supply

    constructor() ERC20("ScoreTest", "ST") {
        _mint(msg.sender, maxSupply);
    }

    // SKALE RNG (only works on SKALE)
    // https://docs.skale.network/tools/skale-specific/random-number-generator
    function sklRNG() public view returns (bytes32 addr) {
        assembly {
            let freemem := mload(0x40)
            let start_addr := add(freemem, 0)
            if iszero(staticcall(gas(), 0x18, 0, 0, start_addr, 32)) {
                invalid()
            }
            addr := mload(freemem)
        }
    }

    // random func use SKALE RNG with fallback
    function random() public view returns (uint256) {
        // use SKALE RNG by default
        uint256 rand = uint256(sklRNG());
        if (rand > 0) {
            return rand;
        } else {
            // fallback for NON-SKALE
            return
                uint256(
                    keccak256(abi.encodePacked(block.timestamp, msg.sender))
                );
        }
    }

    
}
