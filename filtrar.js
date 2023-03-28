const clientes = require("./clientes.json")


// function FiltrarApartamentos(clientes) {
//     return clientes.filter((cliente) => {
//         return (
//             cliente.endereco.apartamento &&
//             !cliente.endereco.hasOwnProperty("complemento")
//         )
//     })

// }




function FiltrarApartamentos(clientes) {
    return clientes.filter(function(cliente) {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        )
    })

}


const novaListaCliente = FiltrarApartamentos(clientes)

console.log(novaListaCliente)