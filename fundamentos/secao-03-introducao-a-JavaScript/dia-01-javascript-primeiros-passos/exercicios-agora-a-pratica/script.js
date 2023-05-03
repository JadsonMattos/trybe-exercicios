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

// 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

let l = 12;
let m = 14;
let n = 16;

if (l % 2 !== 0 || m % 2 !== 0 || n % 2 !== 0) {
    console.log(false);
}
else {
    console.log(true);
}

// 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

// Atente para o fato de que um imposto de 20% incide sobre o custo do produto.

// Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);

let buyValue = 1;
let sellValue = 3;
let total;

if (buyValue < 0 || sellValue < 0) {
    console.log('Inválido!');
}
else {
    total = ((sellValue - (buyValue * 0.2) + buyValue) * 1000);
}
console.log(total);

// 11 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

// A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)

// Salário bruto até R$ 1.556,94: alíquota de 8%

// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)

// Até R$ 1.903,98: isento de imposto de renda

// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto

// Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00 terá o primeiro desconto referente à contribuição do INSS. O cálculo deve ser o demonstrado a seguir.

// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

// R$ 2.670,00 - salário com INSS já deduzido.
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25.
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.

let salarioBruto = 3000.00;
let liquidoInss;
let liquidoIr;

if (salarioBruto <= 1556.94) {
    liquidoInss = salarioBruto - (salarioBruto * 0.08);
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    liquidoInss = salarioBruto - (salarioBruto * 0.09);
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    liquidoInss = salarioBruto - (salarioBruto * 0.11);
}
else {
    liquidoInss = salarioBruto - 570.88;
}

if (liquidoInss <= 1903.98) {
    liquidoIr = liquidoInss;
}
else if (liquidoInss >= 1903.99 && liquidoInss <= 2826.65) {
    liquidoIr = liquidoInss - ((liquidoInss * 0.075) - 142.80);
}
else if (liquidoInss >= 2826.66 && liquidoInss <= 3751.05) {
    liquidoIr = liquidoInss - ((liquidoInss * 0.15) - 354.80);
}
else if (liquidoInss >= 3751.06 && liquidoInss <= 4664.68) {
    liquidoIr = liquidoInss - ((liquidoInss * 0.225) - 636.13);
}
else {
    liquidoIr = liquidoInss - ((liquidoInss * 0.275) - 869.36);
}
console.log(liquidoIr);