const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaArray = 0;

for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
    mediaArray = soma / numbers.length;
}
if(mediaArray >20){
    console.log("O valor da média aritmética é maior que 20");
}else{
    console.log("O valor da média aritmética é menor ou igual a 20");
}

//Estrutura de if para o valor da média aritmética