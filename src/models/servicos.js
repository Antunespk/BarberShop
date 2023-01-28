export class Servicos {
    constructor(
        nome = "",
        valor = "",
        tipo = "",
        id_usuario = "",
        id_estabelecimento = ""
    ) {
        this.nome = nome,
            this.valor = valor,
            this.id_usuario = id_usuario,
            this.id_estabelecimento = id_estabelecimento
    }
}
