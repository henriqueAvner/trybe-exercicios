let nota1 = 18;
let nota2 = 30;
let mediaNota
if (nota1+nota2 >= 60){
    mediaNota = "Parabéns, você foi aprovado";
}else if(nota1+nota2 > 40 && nota1+nota2 <=59){
    mediaNota = "Você está de recuperação, estude para passar.";
}else{
    mediaNota = "Infelizmente, você foi reprovado";
}
console.log(mediaNota);

//exercício de média de nota.