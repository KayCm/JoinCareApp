import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import GStyle, { TRUE_ONE_PIXEL, tSize } from "../../Components/GStyle";
import BluetoothModule from "../../Components/BluetoothConnect";
import { useState } from "react";

function DeviceConnectView(props) {

  const [lst,setLst] = useState([])

  function renderItem(data){


    return (<View style={[GStyle.jc,{height:tSize(44),width:'100%',borderBottomColor:'#123',borderBottomWidth:TRUE_ONE_PIXEL}]}>
      <Text style={{color:'#000'}}>{data.item}</Text>
    </View>)
  }

  return(<View style={[GStyle.ph12,{flex:1,backgroundColor:'#F5F6F7',alignContent:'center'}]}>
    <Text style={{color:'#000'}}>DeviceConnectView</Text>
    <View style={[GStyle.row,{width:'100%',gap:tSize(20),height:tSize(120)}]} >

      <TouchableOpacity onPress={()=>{

        BluetoothModule.searchEvent("name").then(res=>{
          console.log("searchEvent")
          console.log(res)
          setLst(res)
        }).catch(err=>{

        })

      }} style={[GStyle.jc,GStyle.ac,{flex:1,backgroundColor:'#123',borderRadius:tSize(10)}]}>
        <Text>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{

        BluetoothModule.connectEvent("name",(res)=>{
          console.log("connectEvent")
          console.log(res)

          alert(res['key0'])
        })

      }} style={[GStyle.jc,GStyle.ac,{flex:1,backgroundColor:'#456',borderRadius:tSize(10)}]}>
        <Text>Connect</Text>
      </TouchableOpacity>

    </View>

    <Text style={{color:'#000'}}>Output</Text>

    <FlatList
      data={lst}
      renderItem={renderItem}
      style={{flex:1}}
    />


  </View>)
}

export default DeviceConnectView;
