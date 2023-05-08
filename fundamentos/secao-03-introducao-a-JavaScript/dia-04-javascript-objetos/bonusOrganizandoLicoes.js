// 1. Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

let romanNumbers = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function transfornStringToNumber(number) {
  number = number.toLowerCase();
  let size = number.length;
  let sum = romanNumbers[number[size - 1]];
  let atual = romanNumbers[number[size - 1]];
  for (let i = 2; i <= size; i += 1) {
    let prox = romanNumbers[number[size - i]];
    if (atual <= prox) {
      sum += prox;
    } else {
      sum -= prox;
    }
    atual = prox;
  }
  return sum;
}
// console.log(transfornStringToNumber('MMXVIII'));
// console.log(transfornStringToNumber('VI'));
// console.log(transfornStringToNumber('IV'));

// 2. Crie uma função chamada arrayOfNumbers, que receberá a variável vector como parâmetro.
// - Por meio de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado pela função no fim.
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers(vector) {
  let result = [];
  for (let element of vector) {
    let numbers = element;
    for (let element of numbers) {
      let current = element;
      if ((current % 2) === 0) {
        result.push(current);
      }
    }
  }
  return result;
}
// console.log(arrayOfNumbers(vector));

// 3. Por meio do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’] deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

let basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let result = {};
for (let element of basket) {
  let fruit = element
  if (!result[fruit]) result[fruit] = 0;
  result[fruit] += 1;
}

let summaries = [];
for (let fruit in result) {
  let message = `${result[fruit]} ${fruit}`;
  if (result[fruit] > 1) message += 's';
  summaries.push(message);
}
// console.log(`Sua cesta possui: ${summaries.join(', ')}.`);

// 4. Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.

let moradores = {
  blocoUm: [
    {
      nome: 'Luíza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];
// console.log(`O morador do bloco 2 de nome ${ultimoMoradorBlocoDois.nome} ${ultimoMoradorBlocoDois.sobrenome} mora no ${ultimoMoradorBlocoDois.andar}º andar, apartamento ${ultimoMoradorBlocoDois.apartamento}`);

// - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois, faça o mesmo para os moradores do bloco 2.

for (const element of moradores.blocoUm) {
  // console.log(`${element.nome} ${element.sobrenome}`);
}

for (const element of moradores.blocoDois) {
  // console.log(`${element.nome} ${element.sobrenome}`);
}

// Bônus – Organização de lições
// Com o uso do objeto (allLessons) obtido nos exercícios anteriores, crie uma função para contar o número de estudantes que assistiram às aulas de Matemática.
let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

let allLessons = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});

function getNumberStudentsMath(object) {
  let total = 0;
  let keys = Object.keys(object);
  for (let i in keys) {
    if (object[keys[i]].materia === 'Matemática') {
      total += object[keys[i]].numeroEstudantes;
    }
  }
  return total;
}
// console.log(getNumberStudentsMath(allLessons));

// Com o uso do objeto (allLessons) obtido nos exercícios anteriores, crie uma função que retorne um objeto que represente o relatório da pessoa instrutora, as aulas ministradas e o número total de estudantes.

function getInfo(object, name) {
  let allLessons = [];
  let numberStudents = 0;
  let values = Object.values(object);
  for (let i in values) {
    if (values[i].professor === name) {
      allLessons.push(values[i].materia);
      numberStudents += values[i].numeroEstudantes;
    }
  }
  return { aulas: allLessons, estudantes: numberStudents};
}

function createReport(allLessons, name) {
  let report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));