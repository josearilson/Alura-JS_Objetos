

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}




console.log(objPersonagem.aliado)

delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined



const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES"
}


pessoa.cpf = "15346626522-65" 
pessoa.seguroSocial = "854321985-9"
console.log(pessoa.carteiraIdentidade.substring(0, 4))