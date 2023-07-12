const numbers = [50, 85, -30, 3, 15];
const higherNumber = numbers.reduce((bigger, number) => {
    return bigger > number ? bigger : number
})
console.log(higherNumber);