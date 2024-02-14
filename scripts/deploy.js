const { ethers } = require("hardhat");
async function main() {

  const whitelistContract = await ethers.getContractFactory("Whitelist");

  const deployedWhitelistContract = await whitelistContract.deploy(10);

  const deploywhitelistcontract = await deployedWhitelistContract.deployed();
   
  console.log("whitelistCOntract is deployed at:",deploywhitelistcontract.address )
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })