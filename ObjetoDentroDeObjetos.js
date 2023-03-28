const cliente = {
    nome: "Jose",
    idade: 32,
    cpf: "12345678",
    email: "Jose@dominio.com",
    telefone: ["1155554444, 1155556666"]
};

cliente.endereco = {
    rua: "rua joaquim cardoso",
    numero: 111,
    aoartamento: true,
    complemento: " ap 22"
}

console.log(cliente.endereco)
console.log(cliente["endereco"])