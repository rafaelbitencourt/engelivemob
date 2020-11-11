import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/main';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Main" component={Main} />
  </AppStack.Navigator>
);

export default AppRoutes;