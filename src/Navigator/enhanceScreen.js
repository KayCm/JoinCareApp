import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

// {isNeedSafeArea?: boolean}
const enhanceScreen = function(Screen, config={isNeedSafeArea:false}){

  if (!Screen) return null

  const {isNeedSafeArea = false} = config

  let latestTriggerInfo = {
    pageName:'',
    time:0
  }

  class NavigationScreen extends React.Component{

    constructor(){
      super();
      this.state = {
        RingShow:false
      }
    }

    componentDidMount() {

    }

    static navigationOptions = Screen.navigationOptions
      ? (props) => {
        let options = Screen.navigationOptions;
        if (typeof Screen.navigationOptions === 'function') {
          options = Screen.navigationOptions(props);
        }
        return {
          ...options,
        };
      }
      : {};

    render() {

      const {navigation, route} = this.props;
      function navigate(pageName, param = {}, method = 'navigate') {
        let now = Date.now();
        if (pageName === latestTriggerInfo.pageName && now - latestTriggerInfo.time < 500) {
          //500 ms 内 不允许连续两次触发相同的路由
          return;
        }

        latestTriggerInfo = {
          pageName,
          time: now,
        };
        navigation[method](pageName, param);
      }

      const navigator = {
        push:(route) => {
          let key = Object.keys(route);
          if (key.length > 0) {
            let pageName = key[0];
            let param = route[pageName];

            if (param && param.target && param.currentTarget && param.nativeEvent) {
              //这种情况 一般是 bind 方法，把点击事件 当做参数传进来了
              param = {};
            }
            navigate(pageName, param, 'push');
          }
        },

        pop: (n = 1) => {
          navigation.pop(n);
        },

        popToTop: () => {
          navigation.popToTop();
        },

        replace: (route) => {
          let routeName = false;
          let params = {};
          let key = Object.keys(route);
          if (key.length > 0) {
            routeName = key[0];
            params = route[routeName];
          }
          navigate(routeName, params, 'replace');
        },

        navigate: (routeName, params) => {
          navigate(routeName, params);
        },

        reset: navigation.reset,
        addListener: navigation.addListener,
        dispatch: navigation.dispatch,
        dangerouslyGetParent: navigation.dangerouslyGetParent,

      }


      const screenDom = (
        <>
          <Screen navigator={navigator} navigation={navigation} route={route} />
        </>
      );

      if (isNeedSafeArea) {
        return <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>{screenDom}</SafeAreaView>;
      } else {
        return screenDom;
      }

    }
  }

  return NavigationScreen;

}

export default enhanceScreen;
