const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const fs = require("fs");
const envfile = require("envfile");
const filename = ".env";
const parsedFile = envfile.parse(fs.readFileSync(filename));

async function getLastTxGas() {
  // Get latest transaction hash
  const latestBlock = await ethers.provider.getBlock("latest");
  const latestTXHash = latestBlock.transactions.at(-1);
  // Get latest transaction receipt object
  const latestTXReceipt =
    await ethers.provider.getTransactionReceipt(latestTXHash);
  // Determine latest transaction gas costs
  const latestTXGasUsage = latestTXReceipt.gasUsed;
  const latestTXGasPrice = latestTXReceipt.effectiveGasPrice;
  const latestTXGasCosts = latestTXGasUsage.mul(latestTXGasPrice);
  return Number(latestTXGasUsage);
}

describe("Token contract", function () {
  async function deployTokenFixture() {
    const SmartContract =
      await ethers.getContractFactory("ScoreTest");
    const [deployer,user1] = await ethers.getSigners();

    const constract = await SmartContract.deploy();

    console.log("\tGas(deployment):\t", await getLastTxGas());

    await constract.deployed();

    // Fixtures can return anything you consider useful for your tests
    return { constract, deployer, user1 };
  }

  // You can nest describe calls to create subsections.
  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { constract, deployer } = await loadFixture(deployTokenFixture);
      expect(await constract.owner()).to.equal(deployer.address);
    });
  });

});
