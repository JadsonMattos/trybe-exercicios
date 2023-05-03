// 1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = 5;
let b = 5;

console.log('Adição: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

// 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let c = 8;
let d = 10;

if (c > d) {
    console.log('"c" é maior que "d", e o número é: ' + c);
}
else {
    console.log('"d" é maior que "c", e o número é: ' + d);
}

// 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let e = 20;
let f = 50;
let g = 42;

if (e > f && e > g) {
    console.log('Eu sou a letra (e) com o maior valor: ' + e);
}
else if (f > e && f > g) {
    console.log('Eu sou a letra (f) com o maior valor: ' + f);
}
else {
    console.log('Eu sou a letra (g) com o maior valor: ' + g);
}

// 4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

let h = 82;

if (h > 0) {
    console.log('positive');
}
else if (h < 0) {
    console.log('negative');
}
else {
    console.log('zero');
}

// 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

//My resolution
let catetoA = 45;
let catetoB = 90;
let hipotenusa = 32;

if (catetoA + catetoB + hipotenusa === 180) {
    console.log('true');
}
else {
    console.log('false');
}

//Gabarito
let angleA = 45;
let angleB = 90;
let angleC = 32;

let sumAngles = angleA + angleB + angleC;
let positive = angleA > 0 && angleB > 0 && angleC > 0;

if (positive) {
    if (sumAngles === 180) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
else {
    console.log('Inválido');
}

// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let piece = 'rei';

switch (piece.toLowerCase()) {
    case 'rei':
    console.log('Rei -> Uma casa para qualquer direção');
    break;
    case 'bispo':
    console.log('Bispo -> Diagonal');
    break;
    case 'rainha':
    console.log('Rainha -> Todas as direções');
    break;
    case 'cavalo':
    console.log('Cavalo -> Move-se em L, também pode pular');
    break;
    case 'torre':
    console.log('Torre -> Horizontal e vertical');
    break;
    case 'soldado':
    console.log('Soldado -> Um movimento para frente, na saída opção de dois movimentos, ataque somente na diagonal')
    break;
    default:
    console.log('Movimento inválido!')    
}

// 7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let percentual = 101;

if (percentual < 0 || percentual > 100) {
    console.log('Inválido!')
}
else if (percentual >= 90) {
    console.log('A');
}
else if (percentual >= 80) {
    console.log('B');
}
else if (percentual >= 70) {
    console.log('C');
}
else if (percentual >= 60) {
    console.log('D');
}
else if (percentual >= 50) {
    console.log('E');
}
else {
    console.log('F');
}

// 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

let i = 9;
let j = 10;
let k = 11;

if (i % 2 === 0 || j % 2 === 0 || k % 2 === 0) {
    console.log(true);
}
else {
    console.log(false);
}