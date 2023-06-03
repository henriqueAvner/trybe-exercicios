let palavra = "Banana";
let letrasPalavra = palavra.split('');
let letrasInverso;
for (index = 0; index <= letrasPalavra.length; index += 1){
    letrasPalavra.reverse();
}
letrasInverso = letrasPalavra;
console.log(letrasInverso);