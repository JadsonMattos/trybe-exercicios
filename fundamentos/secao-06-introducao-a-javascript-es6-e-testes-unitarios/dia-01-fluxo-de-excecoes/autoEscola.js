const validateInfo = (name, age) => {
  if (!name || !age) {
    throw new Error('Todas as informações são necessárias');
  }
};

const validateAge = (age) => {
  if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }
};

const studentRegister = (name, age) => {
  try {
    validateInfo(name, age);
    validateAge(age);
    return `${name}, boas vindas àAuTrybe!`;
  } catch (error) {
    return error.message;
  }
};
console.log(studentRegister('Jadson', 30));

