import { Text, TouchableOpacity, View } from "react-native";
import GStyle, { tSize } from "../../Components/GStyle";
import { Keypair, PublicKey,Connection } from "@solana/web3.js";
import nacl from "tweetnacl";
import { decodeUTF8 } from "tweetnacl-util";
import bs58 from "bs58";
import { useState } from "react";
import { NetRequest } from "../../Components/Tools";
function CreateWalletView(props) {


  const [keypair,setKeypair] = useState();
  const [pubK,setPubK] = useState();
  const [msg,setMsg] = useState();


  return(<View style={[GStyle.ph12,{flex:1,backgroundColor:'#F5F6F7',justifyContent:'center',alignContent:'center'}]}>

    <TouchableOpacity onPress={()=>{
      let fromKeypair = Keypair.generate();

      const pb = new PublicKey(fromKeypair.publicKey);

      setKeypair(fromKeypair)
      setPubK(pb.toString())
    }}>
      <Text style={{color:'#000'}}>Create wallet</Text>
    </TouchableOpacity>

    <Text style={{color:'#000'}}>{pubK}</Text>

    <TouchableOpacity onPress={()=>{
        let url = 'http://39.107.119.127:9595/user/random/str';
        NetRequest(url, {}).then(res => {
          console.log(res.data);
        });
    }}>
      <Text style={{color:'#000'}}>Get Str</Text>
    </TouchableOpacity>


    <TouchableOpacity onPress={()=>{


      const message = "8lhgvypgxdjbvxj7jp44";
      const messageBytes = decodeUTF8(message);

      const signature = nacl.sign.detached(messageBytes, keypair.secretKey);

      console.log(bs58.encode(signature));


    }} style={{backgroundColor:'#fff',width:'100%',height:tSize(44),justifyContent:'center',alignContent:'center'}}>
      <Text style={{color:'#000'}}>Sign</Text>
    </TouchableOpacity>

  </View>)
}

export default CreateWalletView;
