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