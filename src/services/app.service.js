import api from "./api.js";

class AppService {
    listProjetos = () => api
        .get('projetos')
        .then(({ data }) => data)

    listPlantasPorProjeto = (id) => api
        .get('projeto/' + id + '/plantas')
        .then(({ data }) => data)

    getPlantasMateriais = (idplanta) => api
        .get('plantas_materiais/' + idplanta)
        .then(({ data }) => data)
}

export default new AppService();