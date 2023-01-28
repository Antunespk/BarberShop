export class Usuario {
    constructor(
        nome = "",
        email = "",
        senha = "",
        ativo = true,
        tipo = 1
    ) {
        this.nome = nome,
            this.email = email,
            this.senha = senha,
            this.ativo = ativo,
            this.tipo = tipo
    }
}


//tipo: 0 = admin | 1 = cliente | 2 profissional