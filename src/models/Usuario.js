import moment from "moment/moment"
export class Usuario {
    constructor(
        nome = "",
        cpf = "",
        email = "",
        senha = "",
        telefone = "",
        data_nasc = new Date(),
        ativo = true,
    ) {
        this.nome = nome,
            this.cpf = cpf,
            this.email = email,
            this.senha = senha,
            this.telefone = telefone,
            this.data_nasc = moment(data_nasc, "YYYY-MM-DD"),
            this.ativo = ativo
    }
}
//tipo: 0 = admin | 1 = cliente | 2 profissional
