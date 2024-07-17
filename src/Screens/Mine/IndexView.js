import React, {useState} from 'react';
import { View, Text, Button, TouchableOpacity } from "react-native";
import GStyle, { tSize } from "../../Components/GStyle";


import bs58 from 'bs58';
import {PublicKey} from '@solana/web3.js';
import {toByteArray} from 'react-native-quick-base64';
import { transact, Web3MobileWallet, } from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import { NetRequest } from "../../Components/Tools";
import { useDispatch } from "react-redux";
import { setAppData } from "../../Redux/actions";

const APP_IDENTITY = {
  name: 'JoinCare',
  uri: 'https://JoinCare.com',
  icon: 'favicon.ico', // Full path resolves to https://yourdapp.com/favicon.ico
};


function IndexView(props) {


  const [address, setAddress] = useState('');
  const [msg, setMsg] = useState('');
  const [sign, setSign] = useState('');
  const [vCode, setVCode] = useState('');

  const getStr = () => {
    let url = 'http://39.107.119.127:9595/user/str';
    let params = {
      address: address,
    };
    NetRequest(url, params).then(res => {
      console.log(res);
      console.log(res.data);
      signing(res.data);
    });
  };

  const connect = async () => {
    await transact(async (wallet) => {
      const authorizationResult = await wallet.authorize({
        chain: 'solana:mainnet',
        identity: APP_IDENTITY,
      });
      const pb = new PublicKey(
        toByteArray(authorizationResult.accounts[0].address),
      );
      setAddress(pb.toString());
    });
  }

  const signing = async str => {
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

      LoginWithMsg(bs58.encode(signedMessages[0]));
      // setAddress(pb.toString());
      setMsg(message);
      setSign(bs58.encode(signedMessages[0]));
    });
  };

  const LoginWithMsg = (str) => {
    let url = 'http://39.107.119.127:9595/user/login';
    let params = {
      address: address,
      signature: str,
    };
    console.log(params);
    NetRequest(url, params).then(res => {
      console.log(res);
      setVCode(res.data.token.toString());

      dispatch(setAppData({token:res.data.token.toString(),address:address}))



    });
  };

  const dispatch = useDispatch()

  return(<View style={[GStyle.ph12,{flex:1,backgroundColor:'#F5F6F7',justifyContent:'center',alignContent:'center'}]}>

    <TouchableOpacity style={[GStyle.jc,GStyle.ac,{height:tSize(44),backgroundColor:'#fff',width:'100%'}]} onPress={()=>{

      connect()

    }}>
      <Text style={{color:'#000'}}>{address?address:'Connect Wallet'}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[GStyle.jc,GStyle.ac,{marginTop:tSize(10),height:tSize(44),backgroundColor:'#fff',width:'100%'}]} onPress={()=>{

      if (address){
        getStr()
      }else{
        alert('not connect wallet')
      }


    }}>
      <Text style={{color:'#000'}}>Sign</Text>
    </TouchableOpacity>

    <Text style={{color:'#000'}}>{vCode}</Text>

  </View>)
}

export default IndexView;
