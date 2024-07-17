import * as React from 'react';
import { Button, Image, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CheckingScreen from '../Screens/Checking/IndexView'
import MineScreen from '../Screens/Mine/IndexView'
import enhanceScreen from "./enhanceScreen";

const Tab = createBottomTabNavigator();
function AppBottomTab(props) {



  return(<Tab.Navigator screenOptions={({ route }) => ({
    tabBarActiveTintColor: '#123',
    tabBarInactiveTintColor: '#8a8a8a',
    tabBarIcon: ({ focused, color, size }) => {
      let iconSource;
      if (route.name === 'Checking') {
        iconSource = focused
          ? require('../Resources/Tabs/index_on.png')
          : require('../Resources/Tabs/index.png');
      } else if (route.name === 'Mine') {
        iconSource = focused
          ? require('../Resources/Tabs/mine_on.png')
          : require('../Resources/Tabs/mine.png');
      }

      return <Image style={{ height: 24, width: 24 }} source={iconSource} />;
    }

  })}>
      <Tab.Screen name="Checking" component={enhanceScreen(CheckingScreen,{isNeedSafeArea: true})} />
      <Tab.Screen name="Mine" component={enhanceScreen(MineScreen,{isNeedSafeArea: true})} />
    </Tab.Navigator>)

}

export default AppBottomTab;
