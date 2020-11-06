import axios from 'axios';

const api = axios.create({
  baseURL: 'http://E2DESENV81:3001/',
});

export default api;