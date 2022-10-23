import { ethers } from "ethers";
import { MNEMONIC } from "./config";
import { provider } from "./provider";

// export const wallet = ethers.Wallet.createRandom()
export const wallet = ethers.Wallet.fromMnemonic(MNEMONIC!, "m/44'/60'/0'/0/1")

export async function play() {
  console.log('Wallet mnemonic', wallet.mnemonic);
  console.log('Wallet address', wallet.address);
  console.log('Wallet private key', wallet.privateKey);

  console.log('Wallet address', await wallet.getAddress());
}

