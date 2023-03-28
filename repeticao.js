const cliente = {
    nome: "Jose",
    idade: 32,
    cpf: "12345678",
    email: "Jose@dominio.com",
    telefone: ["1155554444, 1155556666"]
};

cliente.endereco = [{
    rua: "rua joaquim cardoso",
    numero: 111,
    apartamento: true,
    complemento: " ap 22",
    bairro: "carlao",
    cidade: ""
}]




for (let chave in cliente) {
    let tipo = typeof cliente[chave]
    if (tipo != 'object' && tipo !== '') {

        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)

    }

}
