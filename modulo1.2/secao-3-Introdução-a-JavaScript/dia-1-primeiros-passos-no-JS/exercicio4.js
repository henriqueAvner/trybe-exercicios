let a1 = 30;
let a2 = 80;
let a3 = 70;
let soma = a1 + a2 + a3;
let apositivo = a1 > 0 && a2 > 0 && a3 > 0;
if (apositivo) {
    if (soma=== 180) {
        console.log(true);
    }else{
        console.log(false);
};
}else{
    console.log('O valor do angulo é inválido, tente novamente!');
}
