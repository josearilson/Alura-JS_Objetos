const clientes = require("./clientes.json")

//sort ordena lista
function ordenar(lista, parametro_propriedade) {

    const resultado = lista.sort((a, b) => {
        if (
            a[parametro_propriedade] < b[parametro_propriedade]) {
            return -1
        }
        if (
            a[parametro_propriedade] > b[parametro_propriedade]) {
            return 1
        }
        return 0
    })

    return resultado

}

const ordenadoNome = ordenar(clientes, "nome")

console.log(ordenadoNome)

