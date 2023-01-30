export class Estabelecimento {
    constructor(
        logradouro = "",
        bairro = "",
        ativo = true,
        id_socio = [],
    ) {
        this.logradouro = logradouro,
            this.bairro = bairro,
            this.ativo = ativo,
            this.id_socio = id_socio
    }
}