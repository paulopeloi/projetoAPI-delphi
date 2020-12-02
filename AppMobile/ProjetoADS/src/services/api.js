import axios from 'axios';

const api = axios.create({
    baseURL : 'http://192.168.43.54:9002'
})

export default api;

// requisições HTTP: verbos, status code, conexões.