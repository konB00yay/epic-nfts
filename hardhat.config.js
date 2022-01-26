require('@nomiclabs/hardhat-waffle');
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.ALCHEMY_URL)
console.log(process.env.RINKEBY_API_KEY)

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.RINKEBY_API_KEY],
    },
  },
};