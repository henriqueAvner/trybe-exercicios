let num1 = 0;
let num2 = 8;
let num3 = 1;
let maiorNum
let menorNum
if (num1 > num2 && num1 > num3){
    maiorNum = num1;
}else if (num2 > num1 && num2 > num3){
    maiorNum = num2;
}else if(num3 > num1 && num3 > num2){
    maiorNum = num3;
}
if (num1 < num2 && num1 < num3){
    menorNum = num1;
} else if(num2 < num1 && num2 < num3){
    menorNum = num2;
}else if(num3 < num1 && num3 < num2){
    menorNum = num3;
}

console.log('O maior número é: ' + maiorNum);
console.log('E o menor número é: ' + menorNum);

//exercicio de maior e menor número