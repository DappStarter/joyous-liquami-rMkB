require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy renew place concert gesture hero equal genre'; 
let testAccounts = [
"0x990e7ae8eadac9cb69abec075ba8f6e3c61c0a88374e181de628d1b73727fb29",
"0x529b1bfdb2395cb3ed37957381c75ce2e8a4feb59574e5de6c3e7aef6e551cd7",
"0x508cc5ab052361dba859e465dce48d3579437192a56b9e6cc09efaef66645618",
"0xbbccc4e1ef670adcd912a09f05a3f75cb3e7a6bddb2edfefb5c63c87faefbf33",
"0x29b458ce45f578453b28700d2d63ee56734fe94408b5a3e618ee8d934f3d5360",
"0x9ba0dad13b512da47b261f60a7669404fc99b21b741eae74fce7c82d7b72042a",
"0xfcc43e1e5e9b57e5ae6ae8688cc14707b66b1191cb2c180778e042e75088117b",
"0xd9c09a2601c74cff52aaef0d160d188c07628dcbfd111b7efba5023fc669a62c",
"0xcad6c1043de9a591c275879ccf9790d4ddb7aa220145b22c92db13bb26e40beb",
"0x300f106b63e7e1833681d69d775ccc7dd80e05c5f18f127c70e35dcc1f80b40c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


