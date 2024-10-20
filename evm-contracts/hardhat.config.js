require("@nomiclabs/hardhat-waffle");

require('dotenv').config({ path: '../evm-contracts/.env' });

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.23",
  networks: {
    hardhat: {
      throwOnCallFailures: false
    },
    localhost: {
      url: `http://127.0.0.1:8545`,
    },
    storytest: {
      url: `https://testnet.storyrpc.io/`,
      accounts:[`0x${process.env.DEPLOYER}`]
    },
    europa: {
      url: `https://testnet.skalenodes.com/v1/juicy-low-small-testnet`,
      accounts:[`0x${process.env.DEPLOYER}`]
    },
    rsktest: {
      url: `https://rpc.testnet.rootstock.io/${process.env.RSK_RPC_KEY}`,
      chainId: 31,
      gasPrice: 60000000,
      accounts:[`0x${process.env.DEPLOYER}`]
    }
  }
}
