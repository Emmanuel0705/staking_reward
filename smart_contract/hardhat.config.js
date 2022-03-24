require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
// https://eth-rinkeby.alchemyapi.io/v2/38eGg1C5cY2KuAe3OJeBBWfPTuGmIlzS
// https://eth-ropsten.alchemyapi.io/v2/keb1ih0mqSFkM_zKCrDaK9eri4s73hoN
// f4aa392b3b595e5a7556807cbbe1c0fcc88dd772f17178413e5a1996e2edd142
// f4aa392b3b595e5a7556807cbbe1c0fcc88dd772f17178413e5a1996e2edd142
// npx hardhat run scripts/deploy.js --network ropsten
module.exports = {
    solidity: "0.8.4",
    networks: {
        ropsten: {
            url: "https://eth-ropsten.alchemyapi.io/v2/keb1ih0mqSFkM_zKCrDaK9eri4s73hoN",
            accounts: [
                "f4aa392b3b595e5a7556807cbbe1c0fcc88dd772f17178413e5a1996e2edd142",
            ],
        },
    },
};
