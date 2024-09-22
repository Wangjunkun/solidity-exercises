require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
};


// 在 hardhat.config.js 文件中添加下面代码，就是创建一个 accounts 任务（获取所有账户地址）
// 和运行`hh compile`一样，可以直接运行`hh accounts`，非常方便
// 如果想创建更复杂的任务，可以在单独的js文件编写代码，在这里引入即可
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
