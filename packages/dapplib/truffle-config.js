require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note spider unhappy install glimpse bridge sun'; 
let testAccounts = [
"0xa09d804efad70f89820795e98398b94ad64eff9f3de77242f342ebc24199f81e",
"0x967daa0814c2ed9b4312a71429703972971cce5214d9d386ec496ff7bd27e9c7",
"0xf1cf7a3f9fa24646c511b8ec81636fcc18fbe3a5c37e523e3a8b52cb9a99d2fb",
"0x392a79595c9f3af0613b7fe1b76a2c8e8f6afd7ff366d286c6b39a183df5c735",
"0x2d315f9be0eb82b8eed99a948e3027761adecc8b02d56ab5d6dfb64247fd1e48",
"0x12dd83392b2d1237ad443a5338f1a3c4c6f7b33998b85cc00a32588289f6927a",
"0x03db6b5e9cd287c0bc1b9742081da615f8378f66e79efebd8f98e0c7de968428",
"0x7fd5a6fbb9ae66ff914ad3f4e620769e234afbc77d349b47e279de82d56ff781",
"0x883147571570875f81485476a3cb68bfdd2b64a5d3cc8887f49ed97eef617e41",
"0x5ce0dc46c22ca771d0d4c32ac9a96deb000781fc50e1bc9764584f5238a15921"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

