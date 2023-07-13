// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['açaí', 'leite em pó', 'morango'];

const fruitSalad = (fruit, additional) => {
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));