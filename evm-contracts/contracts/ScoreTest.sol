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
        // _mint(msg.sender, maxSupply);
    }

    function unlock(
        string calldata message,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public {
        address verifiedAddress = recoverStringFromVRS(message, v, r, s);
        if (verifiedAddress == msg.sender) {
            uint256 amount = random() % 100;
            _mint(msg.sender, amount * 10 ** 18);
        }
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

    // helper func to return the decimal string representation of value
    function itoa(uint value) public pure returns (string memory) {
        // Count the length of the decimal string representation
        uint length = 1;
        uint v = value;
        while ((v /= 10) != 0) {
            length++;
        }

        // Allocated enough bytes
        bytes memory result = new bytes(length);

        // Place each ASCII string character in the string,
        // right to left
        while (true) {
            length--;

            // The ASCII value of the modulo 10 value
            result[length] = bytes1(uint8(0x30 + (value % 10)));

            value /= 10;

            if (length == 0) {
                break;
            }
        }

        return string(result);
    }

    // check eth sig
    function _ecrecover(
        string memory message,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) internal pure returns (address) {
        // Compute the EIP-191 prefixed message
        bytes memory prefixedMessage = abi.encodePacked(
            "\x19Ethereum Signed Message:\n",
            itoa(bytes(message).length),
            message
        );

        // Compute the message digest
        bytes32 digest = keccak256(prefixedMessage);

        // Use the native ecrecover provided by the EVM
        return ecrecover(digest, v, r, s);
    }

    // recover address from sig v, r, s
    function recoverStringFromVRS(
        string calldata message,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public pure returns (address) {
        // The v, r and s are included directly within the struct, which is 96 bytes in length
        return _ecrecover(message, v, r, s);
    }
}
