import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Projetos from '../pages/main';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Projetos" component={Projetos} />
  </AppStack.Navigator>
);

export default AppRoutes;