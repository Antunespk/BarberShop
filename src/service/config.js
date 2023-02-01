import axios from 'axios';

const configure = {
    local: import.meta.env.VITE_APIURL // Desenvolvimento
};

const http = axios.create({
    baseURL: "https://api-em-nodejs-para-sistema-de-promocao.onrender.com",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
    }
});

http.interceptors.request.use(
    function (config) {
        const usuario = JSON.parse(sessionStorage.getItem('usuario'));
        config.headers.Authorization = (usuario != null && usuario.token != null) ? "Bearer " + usuario.token : '';
        return config;
    }
);

export default http;