const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaArray = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
    mediaArray = soma / numbers.length;
   
}

console.log(`A soma dos valores do Array é ${soma}`);
console.log(`A média dos valores somados é ${mediaArray}`);
