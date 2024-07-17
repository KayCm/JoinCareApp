/**
 * ProjectSocial
 * GStyle
 * Created By KayCM - 2021/8/30
 */
// import * as StyleSheet from './StyleSheet'
// import DeviceInfo from 'react-native-device-info';
import {Dimensions,PixelRatio,Platform,StyleSheet} from "react-native";


export const WINDOW_WIDTH = Dimensions.get('window').width //这个手机 的屏幕宽度
export const WINDOW_HEIGHT = Dimensions.get('window').height //这个手机 的屏幕高度
export const APP_SCALE = WINDOW_WIDTH / 375 //这个手机 相对于 375宽 的比例 - iPhone 6
export let TEXT_SCALE = Math.min(WINDOW_WIDTH / 375, 1.3) //不同手机
export let TRUE_ONE_PIXEL =TEXT_SCALE<APP_SCALE ? 1: 1/PixelRatio.get()

export let STATUSBAR_HEIGHT = getStatusBarHeight();//顶部状态栏
export let NAVIGATOR_HEIGHT = Platform.OS == 'ios' ? tSize(45):tSize(64); //导航栏
export let IS_iOS = Platform.OS == 'ios'

/**
 * 状态栏的高度
 * @returns {number}
 */
function getStatusBarHeight() {
  if (Platform.OS == 'android') {
    // return StatusBar.currentHeight;
    return 0;
  }
  if (Platform.OS == 'ios') {
    return 44;
  }
  return 20;
}

/**
 * 返回最合适当前屏幕的大小字体
 * @param num
 * @param small - 优化高度计算
 * @returns {Number}
 */
export function tSize(num, small) {
  if (num <= 2) {
    return num
  }
  let scale = TEXT_SCALE

  if (small) {
    scale = Math.min(scale, 1.3)
  }
  return num ? Math.floor(num * scale) : num
}


/**
 * 空值判断 (undefined， null， ''， NaN，false，0，[]，{} ，空白字符串)都返回true，否则返回false
 * @param v
 * @returns {boolean}
 */
export function isEmpty(v) {
  switch (typeof v) {
    case 'undefined':
      return true;
    case 'string':
      if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) {
        return true;
      }
      break;
    case 'boolean':
      if (!v) {
        return true;
      }
      break;
    // case 'number':
    //   if (0 === v || isNaN(v)) return true;
    //   break;
    case 'object':
      if (v === null || v.length === 0) {
        return true;
      }
      for (var i in v) {
        return false;
      }
      return true;
  }
  return false;
}

/**
 * 全局快捷样式
 */
const STYLE = StyleSheet.create({
  container: {
    height: '100%',
    overflow: 'hidden',
    flex:1,
  },
  pr: {
    position: 'relative',
  },
  pa: {
    position: 'absolute'
  },
  tc: {
    textAlign: 'center'
  },
  tl: {
    textAlign: 'left'
  },
  tr: {
    textAlign: 'right'
  },
  fb: {
    fontWeight: 'bold'
  },row: {
    flexDirection: 'row',
  },
  ph10: {
    paddingHorizontal: tSize(10)
  },
  ph12: {
    paddingHorizontal: tSize(12)
  },
  ph15: {
    paddingHorizontal: tSize(15)
  },
  ph20: {
    paddingHorizontal: tSize(20)
  },
  ph25: {
    paddingHorizontal: tSize(25)
  },
  ph30: {
    paddingHorizontal: tSize(30)
  },
  pv5: {
    paddingVertical: tSize(5)
  },
  pv6: {
    paddingVertical: tSize(6)
  },
  pv10: {
    paddingVertical: tSize(10)
  },
  pv12: {
    paddingVertical: tSize(12)
  },
  pv15: {
    paddingVertical: tSize(15)
  },
  pv20: {
    paddingVertical: tSize(20)
  },
  pv25: {
    paddingVertical: tSize(25)
  },
  pv30: {
    paddingVertical: tSize(30)
  },
  column: {
    flexDirection: 'column',
  },
  displayFlex: {
    display: 'flex'
  },
  flex: {
    flex: 1
  },
  ac: {
    alignItems: 'center'
  },
  atBase: {
    alignItems: 'baseline'
  },
  jc: {
    justifyContent: 'center'
  },
  jcBetween: {
    justifyContent: 'space-between'
  },
  flexEnd: {
    justifyContent: 'flex-end'
  },
  androidHeaderFix:{
    android:{
      marginTop:20
    }
  }

});
export default STYLE
