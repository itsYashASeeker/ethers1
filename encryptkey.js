const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_ADDRESS);
    const encryptJson = await wallet.encryptSync(process.env.PRIVATE_ADDRESS_PASSWORD, process.env.PRIVATE_ADDRESS)
    console.log(encryptJson);
    fs.writeFileSync("./.encryptedKey.json", encryptJson);
}

main()
    .then(() => process.exit(0))
    .catch((err) => { console.error(err); process.exit(1); })