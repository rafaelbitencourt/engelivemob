import React from 'react';

import Routes from './routes';

import { NavigationContainer } from '@react-navigation/native';

const App = () =>
    (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );

export default App;