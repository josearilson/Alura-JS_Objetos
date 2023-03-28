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
    bairro: "carlao"
}]

cliente.endereco.push({
    rua: "rua sao felipe",
    numero: 3257,
    apartamento: false,
    bairro: "carlao"
})

cliente.endereco.push({
    rua: "rua maria 1",
    numero: 9874,
    apartamento: false,
    bairro: "jardins"
})
//console.log(cliente.endereco)

const listaClienteBairro = cliente.endereco.filter((endereco) => 
    endereco.bairro === ("carlao")
)
console.log(listaClienteBairro)