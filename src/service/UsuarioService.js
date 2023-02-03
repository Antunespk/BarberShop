import { Usuario } from '../models/Usuario.js'; //@ referencia a pasta principal do sistema (SRC)
import http from './config';

export default {
    add: function (usuario = new Usuario) {
        console.log(usuario);
        return http.post("/usuario/add", usuario);
    },

    list: function () {
        return http.get("/usuario/list");
    },

    get: function (id) {
        return http.get("/usuario/" + id);
    },

    login: function (usuario) {
        let dadoslogin = { email: usuario.email, senha: usuario.senha };
        return http.post("/usuario/login", dadoslogin);
    },
    upload: function (dataSend) {
        const request_config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };
        return http.post("/usuario/upload", dataSend, request_config);
    }
};