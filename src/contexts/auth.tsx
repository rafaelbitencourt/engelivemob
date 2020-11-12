import React, { createContext, useState, useEffect } from "react";

import { View, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import AuthService from '../services/auth.service.js';

import api from "../services/api.js";

interface AuthContextData {
    signed: boolean;
    token: string;
    user: object;
    login(usuario, senha): Promise<void>;
    logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);
    const [token, setToken] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@EngeliveAuth:user');
            const storagedToken = await AsyncStorage.getItem('@EngeliveAuth:token');

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
                setToken(storagedToken);
                api.defaults.headers = { 'x-access-token': storagedToken };
            }
            setLoading(false);
        }

        loadStorageData();
    });

    async function login(usuario, senha) {
        const response = await AuthService.login(usuario, senha);
        setUser(response);
        setToken(response.accessToken);
        api.defaults.headers = { 'x-access-token': response.accessToken };

        await AsyncStorage.setItem('@EngeliveAuth:user', JSON.stringify(response));
        await AsyncStorage.setItem('@EngeliveAuth:token', response.accessToken);
    }

    async function logout() {
        await AsyncStorage.clear();
        setUser(null);
        setToken('');
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        );
    }

    return (< AuthContext.Provider value={{ signed: !!user, token, user, login, logout }}>
        { children}
    </AuthContext.Provider >
    );
};

export default AuthContext;