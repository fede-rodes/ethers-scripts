import { ethers } from "ethers";
import { MNEMONIC } from "./config";
import { provider } from "./provider";

// export const wallet = ethers.Wallet.createRandom()
const mnemonicWallet = ethers.Wallet.fromMnemonic(MNEMONIC!, "m/44'/60'/0'/0/1")

export const wallet = mnemonicWallet.connect(provider)

export async function play() {
  // Log wallet data
  console.log('Wallet mnemonic', wallet.mnemonic);
  console.log('Wallet address', wallet.address);
  console.log('Wallet private key', wallet.privateKey);
  console.log('Wallet address', await wallet.getAddress());
  const balance = await wallet.getBalance()
  console.log('Wallet balance', ethers.utils.formatEther(balance));

  // Sign and verify msg
  const msg = "Secret msg"
  const signedMsg = await wallet.signMessage(msg)
  console.log('Signed msg', signedMsg);
  const msgSigner = ethers.utils.verifyMessage(msg, signedMsg)
  console.log('Msg signer', msgSigner === wallet.address);

  // Send tx
  const data = {
    to: wallet.address,
    value: balance.div(10)
  }

  console.log('Data', data);

  const tx =await wallet.sendTransaction(data)
  console.log('Tx', tx);

  console.log('Tx mined', await tx.wait());

}

