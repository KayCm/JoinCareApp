/**
 * QztProject
 * NavHeader
 * Created By KayCM - 2021/8/24
 */
import React from "react";
import {Image, Text, View,TouchableOpacity} from "react-native";
import GStyle, { NAVIGATOR_HEIGHT, STATUSBAR_HEIGHT, TRUE_ONE_PIXEL, tSize} from "./GStyle";


function NavHeader(props) {

    const {onPressLeft,PressLeftShow=true,onPressRight,PressRightDom,bgColor,TextColor,style,title,onlyStatusbar} = props

    let dom
    if (PressRightDom){
        dom = PressRightDom
    }else{
        dom = <View style={{width:tSize(44)}}/>
    }

    if (onlyStatusbar){
        return (<View style={{height:STATUSBAR_HEIGHT,backgroundColor:bgColor}} />)
    }

    return(<View>
        <View style={{height:STATUSBAR_HEIGHT,backgroundColor:bgColor}} />
        <View style={[GStyle.row,GStyle.ph12,GStyle.jcBetween,GStyle.ac,{height:NAVIGATOR_HEIGHT,backgroundColor:bgColor},style]}>

            {PressLeftShow?<TouchableOpacity style={[GStyle.jc,{width:tSize(44),height:NAVIGATOR_HEIGHT}]} onPress={onPressLeft}>
                <Image style={{height:tSize(22),width:tSize(22)}} source={require('../Resources/Common/NavBack.png')}/>
            </TouchableOpacity>:<View style={{width:tSize(44)}}/>}


            <Text style={[{fontSize:tSize(18),textAlign:'center',color:TextColor,fontWeight:'bold'}]}>{title}</Text>


            {/*{PressRightDom()}*/}

            {/*{PressRightDom?<TouchableOpacity style={{width:tSize(44)}}>*/}

            {/*</TouchableOpacity>:PressRightDom()}*/}

            {dom}


        </View>
    </View>)
}
export default NavHeader
