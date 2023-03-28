const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
    {
        rua: "2",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
    {
        rua: "3",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
    {
        rua: "4",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

// código omitido

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);


//sintaxe de espalhamento

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
   ...cliente.enderecos[2]
    
}


console.log(encomenda);