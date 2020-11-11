import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from '../pages/login';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <AuthStack.Screen name="LogIn" component={LogIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;