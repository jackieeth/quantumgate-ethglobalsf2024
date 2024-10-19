
  // run this under the repo root
  // npx hardhat run --network storytest scripts\deploy_ScoreTest.js

const { ethers, network } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deployer:", deployer.address);
  // check account balance
  console.log(
    "Deployer balance:",
    ethers.utils.formatEther(await deployer.getBalance())
  );
  console.log("");

  const SmartContract = await ethers.getContractFactory("ScoreTest");

  const contract = await SmartContract.deploy();

  const WAIT_BLOCK_CONFIRMATIONS = 1;
  await contract.deployTransaction.wait(WAIT_BLOCK_CONFIRMATIONS);

  console.log(`Contract deployed to ${contract.address} on ${network.name}`);

  console.log("done!");
  console.log("Deployer:", deployer.address);
  // check account balance
  console.log(
    "Deployer balance:",
    ethers.utils.formatEther(await deployer.getBalance())
  );
  console.log("");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
