const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numPares = numbers.filter((numbers) => numbers % 2 == 0);
console.log(numPares);

const sumNumbers = numPares.reduce((acc, curr) => {
    return acc + curr;
},0);
console.log(sumNumbers);

