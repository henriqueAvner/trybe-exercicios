// Spread Operator

const arr = [0, 1, 2, 3]; // criei um array
const newArr = [...arr, 4, 5, 6] // adicionei ele ao meu novo array.
console.log(arr); // [0, 1, 2, 3]
console.log(newArr); // [ 0, 1, 2, 3, 4, 5, 6]

// Rest Parameter:

const showName = (...fullName) => { // utilizando o rest parameter dentro do parametro da função showName.

    console.log(fullName); // exibindo-o na tela;
}

showName('Avner', 'Henrique'); // passando os valores que eu quero que o REST PARAMETER transforme em array e exiba na tela.
