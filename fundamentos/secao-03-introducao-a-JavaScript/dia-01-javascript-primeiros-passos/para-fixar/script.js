// 1. Crie uma variável chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
// 2. Crie uma variável chamada birthCity e atribua a ela a sua cidade natal.
// 3. Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
// 4. Utilize o console.log() para imprimir as variáveis que você criou.

let myName = "Jadson";
let birthCity = "Tubarão";
let birthYear = 1991;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

// 1. Crie uma variável chamada base e atribua a ela o valor 5.
// 2. Crie uma variável chamada height e atribua a ela o valor 8.
// 3. Crie uma variável chamada area e atribua a ela o resultado da multiplicação da base pela height. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
// 4. Crie uma variável chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

let base = 5;
let height = 8;
let area = base * height;
console.log(area);

let perimeter = (base * 2) + (height * 2);
console.log(perimeter);

// 1. Crie uma variável que receba a nota de uma pessoa candidata em um desafio técnico e atribua a ela um valor entre 1 e 100.

// 2. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se está na lista de espera. Para isso, considere as seguintes informações:

// - Se a nota for maior ou igual a 80, imprima “Parabéns, você faz parte do grupo de pessoas aprovadas!”.
// - Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera.”.
// - Se a nota for menor que 60, imprima “Infelizmente, você reprovou.”.

// - Crie uma estrutura condicional utilizando if, else if e else para criar o seu algoritmo e os operadores lógicos que se aplicam a cada situação.
// - Altere o valor da nota para verificar se as condições que você implementou funcionam.

let grade = 90;

if (grade >= 80) {
    console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
}
else if (grade < 80 && grade >= 60) {
    console.log("Você está na nossa lista de espera!");
}
else {
    console.log("Infelizmente, você reprovou.")
}

// 1. Crie uma variável chamada “currentHour” que receba um número entre 4 e 24, conforme sua escolha, para representar as horas do dia.

// 2. Crie uma variável chamada “message” que inicialmente seja uma string vazia.

// 3. Implemente as seguintes condicionais:

// - Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.

// - Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.

// - Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.

// - Se o horário for maior ou igual a 11 e menor que 14, insira “Hora do almoço!!!” na variável “message”.

// - Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.

// 4. Agora, imprima a variável message fora das suas condições.

let currentHour = 20;
let message = "";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
}
else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
}
else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
}
else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém-passado";
}
console.log(message);

// 1. Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.

// 2. Utilizando if/else, implemente as seguintes condicionais:

// - Se a variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.

// - Se a variável for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido! UwU!”.

let weekDay = "Quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else {
    console.log("FINALMENTE, descanso merecido! UwU!");
}

// 1. Crie uma variável para armazenar o status da pessoa candidata em um processo seletivo. As possibilidades são: 'aprovada', 'lista' ou 'reprovada'.
// 2. Crie uma estrutura condicional com o switch/case para imprimir as seguintes mensagens:
// - Caso 'aprovada', imprima “Parabéns, você está no grupo de pessoas aprovadas!”.
// - Caso 'lista', imprima “Você está na nossa lista de espera.”.
// - Caso 'reprovada', imprima “Infelizmente, você reprovou.”.
// - Caso default, imprima a mensagem “Informação incorreta.”.

let result = 'lista';

switch (result) {
    case 'aprovada':
        console.log('Parabéns, você está no grupo de pessoas aprovadas!');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera.');
        break;
    case 'reprovada':
        console.log('Infelizmente, você reprovou.');
        break;
    default:
        console.log('Informação incorreta.');
}