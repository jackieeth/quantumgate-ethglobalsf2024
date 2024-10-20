# Quantum Gate 
Quantum Gate unlocks EVM utilities on BTC Ordinals inscriptions. Go to the full-screen mode to connect your MetaMask wallet and call smart contracts from Quantum Gate inscriptions. This is an ETH Global SF Hackathon 2024 project.

## Description
This experimental project showcases EVM smart contract calls inside BTC Ordinals inscriptions. A MetaMask user visits a Quantum Gate BTC inscription page and switches to a full-screen mode (using the 'content' link). S/he clicks on the "unlock" button and connects a wallet. The inscription prompts the user to sign a human-readable message and submit that signature to an EVM smart contract. The contract is called successfully, and more EVM utilities are unlocked on Quantum Gate's BTC inscriptions.

## How it works
BTC Inscriptions are mostly HTML-based. They are placed in a sandbox environment, so no external server calls are allowed. However, wallets such as MetaMask inject codes through web browsers, which provides an opportunity to place smart contract calls within BTC inscriptions.
1. This app is a BTC inscription (to be inscribed soon). This inscription lives on the BTC blockchain.
2. A user visits the inscription page hosted by any BTC Ordinals explorer such as ordinals.com.
3. This inscription uses ethersjs ([inscribed](https://ordinals.com/inscription/10d92ec11b31ea21752ac46781d109bcf53bba04ae9b1044747057335c77ef9ci0)) for a user to connect a Metamask wallet and call EVM smart contract functions within the sandboxed BTC inscription.
4. The user signs a human-readable message as a 'coupon' to redeem cross-EVM-chain tokens via an ECDSA signature verification `ScoreTest` [contract](https://github.com/jackieeth/quantumgate-ethglobalsf2024/blob/main/evm-contracts/contracts/ScoreTest.sol) [SKALE Europa Testnet](https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0x9385A660b79D451e61D7A16Aa5cB7E1a65817e4f) and [Rootstock Testnet](https://explorer.testnet.rootstock.io/address/0x6941aea46962c3c191d099c3c4adfd315eedbf3e). WARNING: DO NOT SIGN ANYTHING THAT'S _NOT_ HUMAN READABLE!
5. On [Story Protocol Testnet](https://testnet.storyscan.xyz/address/0x1e7e036bD54Ac69f23cFC9606c569769e9EE08Cf), the user will receive IP license tokens.
6. All these smart contract calls happened natively within BTC Ordinals. Try those BTC inscriptions out in the 'Demo' section.

## Quick Start
- BTC inscription local test: go to `btc-ordinals` and run `python -m http.server` then go to `/content/quantumSkale.html`. `quantumSkale.html`, `quantumStory.html`, and `quantumRootstock.html` were inscribed as live demos. You need to have Ord installed on a full node or use 3rd party inscription service to inscribe.
- EVM contract deployment: go to `evm-contract`, `yarn` or `npm i` to install, setup `.env`, and deploy `npx hardhat run scripts\deploy_ScoreTest.js --network storytest` (this will deploy on Story Testnet)

## Demos (live within BTC Ordinals Inscriptions)
Here are BTC inscription links, to try the demo, you need to use the FULL-SCREEN mode (click on `content` link)
- Claiming 0-99 amount SKALE tokens (based on SKALE RNG) and ETH human-readable signature via SKALE Europa Testnet https://ordinals.com/inscription/76571385
- Claiming tRBTC/erc20 tokens via Rootstock Testnet https://ordinals.com/inscription/76575754
- Minting IP license [Story Testnet](https://testnet.storyscan.xyz/address/0x1e7e036bD54Ac69f23cFC9606c569769e9EE08Cf),  via Story Protocol https://ordinals.com/inscription/76581680
