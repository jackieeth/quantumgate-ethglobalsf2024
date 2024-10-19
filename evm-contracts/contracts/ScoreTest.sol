// SPDX-License-Identifier: MIT

//
// ScoreTest.sol
//

pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ScoreTest is ERC20, Ownable {

    uint256 public constant maxSupply = 10 ** 9 * 10 ** 18; // 1B max supply

    constructor() ERC20("ScoreTest", "ST") {
        _mint(msg.sender, maxSupply);
    }
}
