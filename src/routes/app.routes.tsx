import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthContext from "../contexts/auth";

import Projetos from '../pages/main';
import Plantas from '../pages/plantas';

import { TouchableOpacity, Button, Alert } from 'react-native';

const AppStack = createStackNavigator();
  
const AppRoutes: React.FC = () => {
  const { logout } = useContext(AuthContext);

  const options = () => {
    return ({
      headerRight: () => (
        <Button
          onPress={() => {
            Alert.alert(
              'Sair',
              'Deseja sair?',
              [
                {
                  text: 'Não',
                  style: 'cancel'
                },
                { text: 'Sim', onPress: () => logout() }
              ],
              { cancelable: false }
            );
            
          }}
          title="Info"
          color="#fff"
        />
      ),
    });
  };

  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Projetos" component={Projetos} options={options} />
      <AppStack.Screen name="Plantas" component={Plantas} options={options} />
    </AppStack.Navigator>
  )
};

export default AppRoutes;