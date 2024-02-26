import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const URL = 'https://eth-sepolia.g.alchemy.com/v2/Smq0OZ5rRX6EN5Ych6FRIdCXxBNJZWmm'
const KEY = 'a0ede47fdc7ea1c70461bec7db9c39771554b4e39f2fdf5af4193d3cb044ffb8'

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: URL ,
      accounts: [`0x${KEY}`]
    }
  },
}

// Transaction Hash : 0xe6edaac8591dabbb963c6d0ecb1387f583850b70dc572eed4c538f3550b59753


// https://sepolia.etherscan.io/tx/0xe6edaac8591dabbb963c6d0ecb1387f583850b70dc572eed4c538f3550b59753