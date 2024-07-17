import { transact } from "@solana-mobile/mobile-wallet-adapter-protocol";
import { PublicKey } from "@solana/web3.js";
import {toByteArray} from 'react-native-quick-base64';
import bs58 from 'bs58';

const APP_IDENTITY = {
  name: 'React Native dApp',
  uri: 'https://yourdapp.com',
  icon: 'favicon.ico', // Full path resolves to https://yourdapp.com/favicon.ico
};



export const connect = async () => {

  await transact(async (wallet) => {
    const authorizationResult = await wallet.authorize({
      chain: 'solana:mainnet',
      identity: APP_IDENTITY,
    });
    const pb = await new PublicKey(
      toByteArray(authorizationResult.accounts[0].address),
    );


    console.log(pb.toString())


    return pb.toString();

  });

}

export  const signing = async str => {
  await transact(async (wallet) => {

    const authorizationResult = await wallet.authorize({
      chain: 'solana:mainnet',
      identity: APP_IDENTITY,
    });

    const message = str;
    const messageBuffer = new Uint8Array(
      message.split('').map(c => c.charCodeAt(0)),
    );

    const signedMessages = await wallet.signMessages({
      addresses: [authorizationResult.accounts[0].address],
      payloads: [messageBuffer],
    });

    const pb = new PublicKey(
      toByteArray(authorizationResult.accounts[0].address),
    );

    return bs58.encode(signedMessages[0]);

  });
};
