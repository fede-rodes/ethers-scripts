import { ethers } from "ethers";
import { provider } from "./provider";
import { wallet, play } from "./wallet";

async function main() {
  await play()
}

if (require.main === module) {
  main()
      .then(() => process.exit(0))
      .catch(err => {
          console.error(err);
          process.exit(1);
      });
} else {
  main().then(p => {
      module.exports = p;
  })
}
