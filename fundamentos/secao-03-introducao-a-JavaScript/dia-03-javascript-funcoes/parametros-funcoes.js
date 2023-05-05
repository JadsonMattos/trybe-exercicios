// - Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

// let clientesTrybeBank = ['Ada', 'John', 'Gus'];
// function adicionaCliente(nome) {
//     if (typeof nome === 'string') {
//         clientesTrybeBank.push(nome);
//         return 'Cliente adicionado!'
//     }
//     else {
//         return 'Error!';
//     }
// }
// console.log(adicionaCliente('Jadson'));
// console.log(clientesTrybeBank);

// - Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];
function removeCliente(nome) {
    if (typeof nome === 'string') {
        let nomeExistente = false;
        for (let i = 0; i < clientesTrybeBank.length; i += 1) {
            if (nome === clientesTrybeBank[i]) {
                clientesTrybeBank.splice(i,1);
                nomeExistente = true;
                return 'Cliente excluído(a)!';
            }
        }
        if (nomeExistente === false) {
            return 'Cliente não existente!';
        }
    }
    else {
        return 'Error!';
    }
}
console.log(removeCliente('Ciclano'));
console.log(removeCliente('John'));
console.log(clientesTrybeBank);