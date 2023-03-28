const cliente = {
    nome: "Jose",
    idade: 32,
    cpf: "12345678",
    email: "Jose@dominio.com",
    telefone: ["1155554444, 1155556666"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insifuciente")
        }
        else {
            this.saldo -= valor

            console.log(`Pagamento realizado. Novo saldo. ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(150)



