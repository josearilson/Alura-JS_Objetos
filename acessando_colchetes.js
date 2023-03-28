const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};


const chaves = ["nome", "idade", "cpf", "email"];


chaves.forEach((chave) => {

    console.log(`A chave ${chave} tem o valor de ${cliente[chave]} `)

})

const pet = {
    nome: "Rex",
    dataDeNascimento: "12/03/2017",
    brinquedoFavorito: "bolinha",
    cor: "cinza",
};

console.log(pet.dataDeNascimento)

