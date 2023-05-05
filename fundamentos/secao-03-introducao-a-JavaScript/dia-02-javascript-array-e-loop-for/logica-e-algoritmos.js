// - crie um algoritmo que imprima na tela o fatorial de 10.
let a = 10;
let factorial = 1;
for (let i = 10; i > 0; i -= 1) {
    factorial *= i;
}
console.log(factorial);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let inversion = '';
for (let i = word.length - 1; i >= 0; i -= 1) {
    inversion += word[i];
}
console.log(inversion);

// - Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let caractersBig = array[0];
let caractersSmall = array[0];
for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > caractersBig.length) {
        caractersBig = array[i];
    }
} 
for (let i = 1; i < array.length; i += 1) {
    if (array[i].length < caractersSmall.length) {
        caractersSmall = array[i];
    }
}
console.log(caractersBig);
console.log(caractersSmall);

// - Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let biggestNumber = 2;
for (let i = 2; i <= 50; i += 1) {
    let isPrime = true;
    for (let j = 2; j < i; j += 1) {
        if (i % j === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        biggestNumber = i;
    }
}
console.log(biggestNumber);