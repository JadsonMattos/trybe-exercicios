// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'melância', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'banana', 'mamão'];

const fruitSalad = (fruit, additional) => {
  const fruits = [...fruit, ...additional];
  return fruits;
};

console.log(fruitSalad(specialFruit, additionalItens));