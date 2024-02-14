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


    // whitelistCOntract is deployed at :0x6948b856Fea55f4571ecc186De2B3A5643c3EcD5,0x2F1F38d7E94B4B0eb027Fc1A6E0C69e266f46F7c,0x6b1eA44fcF1c5a1D3FaD19656Cc57140D648b3d0