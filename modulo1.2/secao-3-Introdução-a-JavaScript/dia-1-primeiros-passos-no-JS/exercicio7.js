let bruto = 900;
let aliquota
let impRenda


if (bruto <= 1556.94) {
    aliquota = bruto * 0.08;
}else if (bruto >=1556.94 && bruto <= 2594.92) {
    aliquota = bruto * 0.09;
}else if(bruto>=2594.93 && bruto <= 5189.82) {
    aliquota = bruto * 0.11;
}else if (bruto > 5189.82) {
    aliquota = bruto - 570.88;
}
if (bruto < 1903.98) {
    impRenda = "ISENTO";
}else if (bruto >= 1903.99 && bruto <= 2826.65) {
    impRenda = (bruto * 0.075) - 142.80;
}else if (bruto >= 2826.66 && bruto <= 3751.05) {
    impRenda = (bruto * 0.15) - 354.80;
}else if(bruto >= 3751.06 && bruto <= 4664.68 ) {
    impRenda = (bruto * 0.225) - 636.13;
}else if (bruto > 4664.68) {
    impRenda = (bruto * 0.275) - 869.36; 
}
console.log("A alíquota do salário bruto para INSS é: " + aliquota);
console.log("O imposto de Renda a partir do salário é: " + impRenda);
