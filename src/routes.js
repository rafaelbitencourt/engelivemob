import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LogIn from './pages/login';
import Main from './pages/main';

// const Routes = createStackNavigator({
//     LogIn,
//     // Main,
// });

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export default Routes;