const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
const generateEmployee = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  return {fullName, email: `${email}@trybe.com`};
}
console.log(newEmployees(generateEmployee));

const verifyNumber = (apostedNumber, sortedNumber) => apostedNumber === sortedNumber;
const makeRandomNumber = (apostedNumber, callback) => {
  const sortedNumber = Math.floor((Math.random() * 5) + 1);
  return callback(apostedNumber, sortedNumber) ? 'Parabéns, você ganhou' : 'Tente novamente';
}
console.log(makeRandomNumber(3, verifyNumber));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const comparation = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  }
  if (studentAnswers === 'N.A') {
    return 0;
  }
  return -0.5;
}
const countPoints = (rightAnswers, studentAnswers, action) => {
  let count = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    const actionReturn = action(rightAnswers[i], studentAnswers[i]);
    count += actionReturn;
  }
  return `Resultado final: ${count} pontos`;
};
console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, comparation));
