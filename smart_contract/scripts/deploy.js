const hre = require("hardhat");

const main = async () => {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    const Staking = await hre.ethers.getContractFactory("Staking");
    const staking = await Staking.deploy();

    await staking.deployed();

    console.log("Staking deployed to:", staking.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
