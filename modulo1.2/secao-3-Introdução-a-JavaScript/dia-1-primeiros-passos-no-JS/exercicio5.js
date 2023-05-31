let pecaXadrez = "rainha";

switch(pecaXadrez.toLowerCase()){
    case 'rei':
        console.log('O rei se movimenta em uma casa para todas as direções.');
        break;
    case 'rainha':
        console.log('A rainha se move livremente, quantas casas quiser.');
        break;
    case 'bispo':
        console.log('O bispo se move apenas na diagonal, quantas casas quiser.');
        break;
    case 'cavalo':
         console.log('O cavalo se move em "L" e pode pular peças.');
         break;
    case 'torre':
        console.log('A torre se move na vertical e horizontal, quantas casas quiser.');
        break;
    case 'peao':
        console.log('O peão se move na vertial e horizontal, apenas uma casa por vez.');
        break;
    default:
        console.log('Peça não existente, escreva outra!');
    
};