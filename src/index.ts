import "dotenv/config";
import { ethers } from "ethers";
import { provider } from "./provider";

async function main() {
  // console.log('Current block number', await provider.getBlockNumber())
  const vitaBalance = ethers.BigNumber.from(await provider.getBalance("vitalik.eth"))
  console.log('Vitalik balance is:', ethers.utils.formatEther(vitaBalance))
}

main()
