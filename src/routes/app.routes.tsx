import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Projetos from '../pages/main';
import Plantas from '../pages/plantas';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Projetos" component={Projetos} />
    <AppStack.Screen name="Plantas" component={Plantas} />
  </AppStack.Navigator>
);

export default AppRoutes;