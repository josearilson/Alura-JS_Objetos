const cliente = {
    nome: "Jose",
    idade: 32,
    cpf: "12345678",
    email: "Jose@dominio.com",
};


console.log(`O seu nome é ${cliente.nome}`);

console.log(`Os 4 digitos do CPD são ${cliente.cpf.substring(0, 4)}`);