import api from "./api.js";

// import { AsyncStorage } from 'react-native';

class AuthService {
    login(usuario, senha) {
        return api
            .post("auth/signin", {
                usuario,
                senha
            })
            .then(response => {
                if (response.data.accessToken) {
                    // AsyncStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        // AsyncStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();