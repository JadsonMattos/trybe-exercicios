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

// - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
function addTurnNight(object, key, value) {
  object[key] = value;
}
addTurnNight(lesson2, 'turno', 'noite');
// console.log(lesson2);

// - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(object) {
  return Object.keys(object);
}
// console.log(listKeys(lesson1));

// - Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
function showSize(object) {
  return Object.keys(object).length;
}
// console.log(showSize(lesson1));

// - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValues(object) {
  return Object.values(object);
}
// console.log(listValues(lesson1));

// - Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3.
let allLessons = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});
// console.log(allLessons);

// - Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
function getNumberOfStudents(object) {
  let total = 0;
  let keys = Object.keys(object);
  for (let i in keys) {
    total += object[keys[i]].numeroEstudantes;
  }
  return total;
}
// console.log(getNumberOfStudents(allLessons));

// - Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.
function getValueByNumber(object, number) {
  return Object.values(object)[number];
}
// console.log(getValueByNumber(lesson1, 2));

// Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. 
function verifyPair(object, key, value) {
  let entries = Object.entries(object);
  let isEqual = false;
  for (let i in entries) {
    if (entries[i][0] === key && entries[i][1] === value) isEqual = true;
  }
  return isEqual;
}
// console.log(verifyPair(lesson2, 'professor', 'Carlos'));