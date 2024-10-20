## Quick Start
clone a Story [boilerplate repo](https://github.com/storyprotocol/story-protocol-boilerplate) and copy these files there 

## Deployment
 - `forge script scripts/StoryGame.s.sol:MyScript --rpc-url https://testnet.storyrpc.io --broadcast`

## Story Contracts (deployed on testnet)
- IPARegistrar [0x62F4972F7722871724E69EAe11af175029DA1D47](https://testnet.storyscan.xyz/address/0x62F4972F7722871724E69EAe11af175029DA1D47)
- IPALicenseTerms [0xDDA62418de8fa6873a092876020D466E40750156](https://testnet.storyscan.xyz/address/0xDDA62418de8fa6873a092876020D466E40750156)
- IPALicenseToken [0x1e7e036bD54Ac69f23cFC9606c569769e9EE08Cf](https://testnet.storyscan.xyz/address/0x1e7e036bD54Ac69f23cFC9606c569769e9EE08Cf)

  function to be called in inscription using in-line ABI:
  `function mintLicenseToken(
        uint256 ltAmount,
        address ltRecipient
  ) external returns (address ipId, uint256 tokenId, uint256 startLicenseTokenId)`

## Story - Smart Contract Tutorial

This repository should be used to help developers get started with building on top of Story's smart contracts. It includes a simple contract used for IP registration of mock ERC-721 NFTs, and accompanying tests.

## Documentation

Find the full smart contract guide here: https://docs.story.foundation/docs/get-started-with-the-smart-contracts

## Get Started

1. `yarn`

2. Run the tests

    2a. Run all the tests: `forge test --fork-url https://testnet.storyrpc.io/`

    2b. Run a specific test: `forge test --fork-url https://testnet.storyrpc.io/ --match-path test/IPALicenseTerms.t.sol`
