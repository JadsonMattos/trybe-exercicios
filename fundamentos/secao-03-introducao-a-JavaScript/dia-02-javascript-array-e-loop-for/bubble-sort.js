// - Ordene o array numbers em ordem crescente e imprima seus valores.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let i = 1; i < numbers.length; i += 1) {
//     for (let j = 0; j < i; j += 1) {
//         if (numbers[i] < numbers[j]) {
//             let position = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = position;
//         }
//     }
// }
// console.log(numbers);

// - Ordene o array numbers em ordem decrescente e imprima seus valores.

// for (let i = 1; i < numbers.length; i += 1) {
//     for (let j = 0; j < i; j += 1) {
//         if (numbers[i] > numbers[j]) {
//             let position = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = position;
//         }
//     }
// }
// console.log(numbers);

// - Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

// let newNumbers = [];
// for (let i = 0; i < numbers.length; i += 1) {
//     if (i < (numbers.length - 1)) {
//         newNumbers.push(numbers[i] * numbers[i + 1]);
//     }
//     else {
//         newNumbers.push(numbers[i] * 2);
//     }
// }
// console.log(newNumbers);

// - Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n.

// let n = 5;
// let asteristic = '*';
// let line = '';
// for (let i = 0; i < n; i += 1) {
//     line = line + asteristic;
// }
// for (let i = 0; i < n; i += 1) {
//     console.log(line);
// }

// - Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base.

// let n = 5;
// let asteristic = '*';
// let line = '';
// for (let i = 0; i <= n; i += 1) {
//     console.log(line);
//     line = line + asteristic;
// }

// - Agora, inverta o lado do triângulo.

// let n = 5;
// let asteristic = '*';
// let line = '';
// let position = n - 1;
// for (let i = 0; i < n; i += 1) {
//     for (let j = 0; j < n; j += 1) {
//         if (j < position) {
//             line = line + ' ';
//         }   
//         else {
//             line = line + asteristic;
//         } 
//     }
//     console.log(line);
//     line = '';
//     position -= 1;
// }

// - Depois, faça uma pirâmide com n asteriscos de base.

// let n = 5;
// let asteristic = '*';
// let line = '';
// let mid = (n + 1) / 2;
// let left = mid;
// let right = mid;
// for (let i = 0; i <= mid; i += 1) {
//     for (let j = 0; j <= n; j += 1) {
//         if (j > left && j < right) {
//             line = line + asteristic;
//         }   
//         else {
//             line = line + ' ';
//         } 
//     }
//     console.log(line);
//     line = '';
//     right += 1;
//     left -= 1;
// }

// - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Para isso, assuma que o valor de n será sempre ímpar.

// let n = 7;
// let asteristic = '*';
// let mid = (n + 1) / 2;
// let left = mid;
// let right = mid;
// for (let i = 1; i <= mid; i += 1) {
//     let line = '';
//     for (let j = 1; j <= n; j += 1) {
//         if (j == left || j == right || j == mid) {
//             line += asteristic;
//         }   
//         else {
//             line += ' ';
//         } 
//     }
//     left -= 1;
//     right += 1;
//     console.log(line);
// }

// - Faça um algoritmo que indique se um número definido em uma variável é primo ou não.

// let divisor = 1;
// let same = 31;
// for (let i = 2; i <= same; i += 1) {
//     if (same % i === 0) divisor += 1;
// }
// if (divisor === 2) console.log(same + ' é primo');
// else console.log(same + ' não é primo');