/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from "./src/Navigator/AppNavigator";
import { Provider } from 'react-redux';
import stores from "./src/Redux/stores";

function App(): React.JSX.Element {
  return (<Provider store={stores}>
    <AppNavigator />
  </Provider>)
}

export default App;
