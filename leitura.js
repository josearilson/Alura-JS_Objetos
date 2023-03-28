const dados = require("./cliente.json")


console.log(dados)

console.log(typeof dados)

const clientEmString = JSON.stringify(dados) // transforma em string


console.log(clientEmString)

console.log(typeof clientEmString) // mostra o tipo do dado

const objstoCliente = JSON.parse(clientEmString) // transforma em objeto



console.log(typeof objstoCliente)