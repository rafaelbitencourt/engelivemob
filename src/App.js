import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes/index.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from "./contexts/auth.tsx";

const App = () =>
    (
        <NavigationContainer>
            <AuthProvider>
                <Routes/>
            </AuthProvider>
        </NavigationContainer>
    );

export default App;