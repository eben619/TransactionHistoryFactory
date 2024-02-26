import { ethers } from "hardhat";

async function main() {

  const TransactionHistoryFactory = await ethers.deployContract("TransactionHistoryFactory");

  await TransactionHistoryFactory.waitForDeployment();

  console.log("TransactionHistoryFactory deployed to:", TransactionHistoryFactory.target);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
 
// Transaction Hash : 0xe6edaac8591dabbb963c6d0ecb1387f583850b70dc572eed4c538f3550b59753

// https://sepolia.etherscan.io/tx/0xe6edaac8591dabbb963c6d0ecb1387f583850b70dc572eed4c538f3550b59753