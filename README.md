# Quantum Gate 
Quantum Gate unlocks EVM utilities on BTC Ordinals inscriptions. This is an ETH Global SF Hackathon 2024 project.

## Description
NFT liquidity has gone to BTC Ordinals. What if we have ways to bring the liquidity back to the EVM ecosystem? This is an experimental project for showcasing EVM smart contract calls inside BTC Ordinals inscriptions. A MetaMask user visits a Quantum Gate inscription page and switches to a full-screen mode. S/he clicks on the "unlock" button and connects a wallet. The inscription prompts the user to sign a human-readable message and submit that signature to an EVM smart contract. The contract got called successfully and more EVM utilities were unlocked on Quantum Gate's BTC inscriptions.

## How it works (wip)
BTC Inscriptions are mostly html-based. BTC inscriptions are placed in a sandbox environment so that no external server calls are allowed. However, wallets such as MetaMask are injecting codes through web browsers. This provides an opportunity to place smart contract calls within BTC inscriptions.
1. This app is a BTC inscription (to be inscribed soon). This inscription lives on the BTC blockchain.
2. A user visits the inscription page hosted by any BTC Ordinals explorer such as ordinals.com.
3. This inscription uses ethersjs ([inscribed](https://ordinals.com/inscription/10d92ec11b31ea21752ac46781d109bcf53bba04ae9b1044747057335c77ef9ci0)) for a user to connect a Metamask wallet and call EVM smart contract functions within the sandboxed BTC inscription.
4. The user signs a human readable message as a 'coupon' to redeem cross-EVM-chain tokens via an ECDSA signature verification contract [Story Testnet](https://testnet.storyscan.xyz/address/0x36b27c1C110856B1eB0Eae44E33cC62c97e556b5), [Rootstock Testnet](https://explorer.testnet.rootstock.io/address/0x36b27c1c110856b1eb0eae44e33cc62c97e556b5), [SKALE Europa Testnet](https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0x36b27c1C110856B1eB0Eae44E33cC62c97e556b5). WARNING: DO NOT SIGN ANYTHING THAT'S _NOT_ HUMAN READABLE!

## Quick Start (wip)
- BTC inscription local test: go to `btc-ordinals` and run `python -m http.server` then go to `/content/quantumbase.html`
- EVM contract deployment: go to `evm-contract`, `yarn` or `npm i` to install, setup `.env`, and deploy `npx hardhat run scripts\deploy_ScoreTest.js --network storytest` (this will deploy on Story Testnet)

## BTC Ordinals Inscription Demos
Here are BTC inscription links, to try the demo, you need to use the full-screen mode (click on `content` link)
- SKALE https://ordinals.com/inscription/76571385
