import api from "./api.js";

// import { AsyncStorage } from 'react-native' ;

class AppService {
    listProjetos = () => api
        .get('projetos')
        .then(({ data }) => data)
}

export default new AppService();