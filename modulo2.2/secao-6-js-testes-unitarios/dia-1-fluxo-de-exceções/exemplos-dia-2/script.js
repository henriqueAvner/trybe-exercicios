//Função para validar se os números são do tipo NUMBER


const mediaStudent = (a,b,c,d) => {
    if(typeof a !== 'number'||typeof b !== 'number'||typeof c !== 'number'||typeof d !== 'number'){
        throw new Error ('Atenção! Os valores devem ser números');
    }
}

const calcMedia = (a,b,c,d) => {
    try{
        mediaStudent(a,b,c,d);
        const sumNumbers = a + b + c + d;
        const mediaNumbers = sumNumbers / 4;
        return mediaNumbers
    }
    catch(error) {
        return error.message;
    }
}
console.log(calcMedia('4',6,8,9));



































/*const mediaStudent = (a,b,c,d) => {
    const media = (a + b + c + d) / 4
    try {
        checkNumber(number);
        console.log(`A média do boletim é ${media}`);
    }
    catch(err){
        err.message;
    }

}

const checkNumber = (number) => {
    if(typeof media !== number){
        throw new Error('O valor digitado precisa ser um número');
    }
}
console.log(mediaStudent(4,6,8,7));
*/