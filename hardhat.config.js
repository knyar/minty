require("@nomiclabs/hardhat-waffle");

const privateKey = "...";


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.7.3",

    defaultNetwork: 'matic_mainnet',
    // defaultNetwork: 'matic_testnet',
    networks: {
        matic_mainnet: {
            url: "https://rpc-mainnet.maticvigil.com",
            gasPrice: 30000000000,
            accounts: [privateKey]
        },
        matic_testnet: {
            url: "https://rpc-mumbai.maticvigil.com",
            gasPrice: 8000000000,
            accounts: [privateKey]
        }
    }
};
