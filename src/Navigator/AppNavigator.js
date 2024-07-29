import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppBottomTab from "./AppBottomTab";
import enhanceScreen from "./enhanceScreen";
import DeviceConnect from "./../Screens/Checking/DeviceConnectView"
import CreateWalletView from "../Screens/Mine/CreateWalletView";


const Stack = createNativeStackNavigator();

function AppNavigator() {

  return(<NavigationContainer>

    <Stack.Navigator initialRouteName="AppBottomTab" screenOptions={null}>

      <Stack.Group>
        <Stack.Screen name="AppBottomTab" component={enhanceScreen(AppBottomTab,{isNeedSafeArea:false})} options={{headerShown:false,animation:'slide_from_right'}} />
        <Stack.Screen name="DeviceConnect" component={enhanceScreen(DeviceConnect,{isNeedSafeArea:true})} options={{headerShown:true,animation:'slide_from_right'}} />
        <Stack.Screen name="CreateWallet" component={enhanceScreen(CreateWalletView,{isNeedSafeArea:true})} options={{headerShown:true,animation:'slide_from_right'}} />
      </Stack.Group>

    </Stack.Navigator>
  </NavigationContainer>)
}

export default AppNavigator;
