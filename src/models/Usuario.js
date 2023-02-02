import moment from "moment/moment"
export class Usuario {
    constructor(
        nome = "",
        foto = "",
        cpf = "",
        email = "",
        senha = "",
        telefone = "",
        data_nasc = new Date(),
        ativo = true,
        tipo = 1
    ) {
        this.nome = nome,
            this.foto = foto,
            this.cpf = cpf,
            this.email = email,
            this.senha = senha,
            this.telefone = telefone,
            this.data_nasc = moment(data_nasc, "YYYY-MM-DD"),
            this.ativo = ativo,
            this.tipo = tipo
    }
}


//tipo: 0 = admin | 1 = cliente | 2 profissional
