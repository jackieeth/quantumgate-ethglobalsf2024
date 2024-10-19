# Quantum Gate 
Quantum Gate unlocks EVM utilities on BTC Ordinals inscriptions. This is an ETH Global SF Hackathon 2024 project.

## How it works (wip)
1. This app is an BTC inscription (to be inscribed soon). This inscription lives on the BTC blockchain.
2. A user visits the inscription page hosted by any BTC Ordinals explorer such as ordinals.com.
3. This inscription uses ethersjs ([inscribed](https://ordinals.com/inscription/10d92ec11b31ea21752ac46781d109bcf53bba04ae9b1044747057335c77ef9ci0)) for a user to connect a Metamask wallet and call EVM smart contract functions within the sandboxed BTC inscription.
4. The user signs a human readable message as a 'coupon' to redeem cross-EVM-chain tokens via a ECDSA signature verification contract [Story Testnet](https://testnet.storyscan.xyz/address/0x36b27c1C110856B1eB0Eae44E33cC62c97e556b5), [Rootstock Testnet](https://explorer.testnet.rootstock.io/address/0x36b27c1c110856b1eb0eae44e33cc62c97e556b5), [SKALE Europa Testnet](https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/address/0x36b27c1C110856B1eB0Eae44E33cC62c97e556b5).

## Quick Start (wip)
- BTC inscription local test: go to `btc-ordinals` and run `python -m http.server` then go to `/content/quantumbase.html`
- EVM contract deployment: go to `evm-contract`, `yarn` or `npm i` to install, setup `.env`, and deploy `npx hardhat run scripts\deploy_ScoreTest.js --network storytest` (this will deploy on Story Testnet)