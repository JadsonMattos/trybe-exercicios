
/*Vários exercícios utilizando valores semelhantes e complementares, descomente e comente para ir testando.*/

// Array para todos os exercícios 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// - Percorra o array imprimindo todos os valores contidos nele com a função console.log().
// for (let values of numbers) {
//     console.log(values);
// }

// - Some todos os valores contidos no array e imprima o resultado.
// let result = 0;
// for (let values of numbers) {
//     result += values;
// }
// console.log(result)

// - Calcule e imprima a média aritmética dos valores contidos no array.
    // - A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// let sum = 0;
// let average;
// for (let values of numbers) {
//     sum += values;
//     average = sum / numbers.length;
// }
// console.log(average);

// - Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
// let sum = 0;
// let average;
// for (let values of numbers) {
//     sum += values;
//     average = sum / numbers.length;
// }
// if (average > 20) {
//     console.log('O valor da média aritmética é maior que 20');
// }
// else {
//     console.log('O valor da média aritmética é menor ou igual a 20');
// }

// - Utilizando for, descubra o maior valor contido no array e imprima-o.
// let higherNumber = numbers[0];
// for (let values of numbers) {
//     if (values > higherNumber) {
//         higherNumber = values;
//     }
// }
// console.log(higherNumber);

// - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
// let odds = 0;
// for (let values of numbers) {
//     if (values % 2 !== 0) {
//         odds += 1;
//     }
// }
// if (odds === 0) {
//     console.log('Nenhum valor ímpar encontrado');
// }
// else {
//     console.log(odds);
// }

// - Utilizando for, descubra o menor valor contido no array e imprima-o.
// let smaller = numbers[0];
// for (let values of numbers) {
//     if (values < smaller) {
//         smaller = values;
//     }
// }
// console.log(smaller);

// - Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
// let arrayNumbers = [];
// for (let i = 1; i <= 25; i += 1) {
//     arrayNumbers.push(i);
// }
// console.log(arrayNumbers);

// - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
// let arrayNumbers = [];
// for (let i = 1; i <= 25; i += 1) {
//     arrayNumbers.push(i);
// }
// for (let element of arrayNumbers) {
//     console.log(element / 2);
// }

