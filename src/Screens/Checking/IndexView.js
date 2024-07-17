import { View, Text, Button, TouchableOpacity } from "react-native";
import NavHeader from "../../Components/NavHeader";
import GStyle, { tSize } from "../../Components/GStyle";
import { useSelector } from "react-redux";
function IndexView(props) {

  const {navigation} = props

  const appData = useSelector((state) => state.appData);


  console.log(appData)

  return(<View style={[GStyle.ph12,{flex:1,backgroundColor:'#F5F6F7',alignContent:'center'}]}>

    <View style={[GStyle.row,GStyle.pv10,{width:'100%',marginTop:tSize(20),gap:tSize(20),height:tSize(120)}]} >

      <View style={{flex:1,backgroundColor:'#123',borderRadius:tSize(10)}}></View>
      <View style={{flex:1,backgroundColor:'#456',borderRadius:tSize(10)}}></View>

    </View>

    <TouchableOpacity style={[GStyle.jc,GStyle.ac,{height:tSize(44),backgroundColor:'#fff',width:'100%'}]} onPress={()=>{
      props.navigation.push('DeviceConnect')
    }}>
      <Text style={{color:'#000'}}>绑定设备</Text>
    </TouchableOpacity>


    <Text style={{color:'#000',marginTop:tSize(10)}}>{appData.address}</Text>
    <Text style={{color:'#000',marginTop:tSize(10)}}>{appData.token}</Text>


  </View>)
}

export default IndexView;
