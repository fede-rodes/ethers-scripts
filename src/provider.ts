import { ethers } from "ethers";
import { RPC_PROVIDER } from "./config";

export const provider = new ethers.providers.JsonRpcProvider(RPC_PROVIDER);

export  async function play() {
  console.log('Current block number', await provider.getBlockNumber())
  const vitaBalance = ethers.BigNumber.from(await provider.getBalance("vitalik.eth"))
  console.log('Vitalik balance is:', ethers.utils.formatEther(vitaBalance))
}
