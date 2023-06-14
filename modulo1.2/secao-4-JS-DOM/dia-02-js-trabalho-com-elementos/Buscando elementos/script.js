//acessando elemento where-are-you
const reqOne = document.getElementById('where-are-you');
//acessando parent e dando cor
const reqTwo = reqOne.parentElement;
reqTwo.style.color = 'green';
//acessando first child e dando texto
const reqThree = reqOne.firstElementChild;
reqThree.innerText = "Looking for wisdom";
//acessando first child a partir de parent
const reqFour = document.getElementById('parent').firstElementChild;
//acessando first-child a partir de where-are-you
const reqFive = reqOne.previousElementSibling;
//Acesse o texto Attention! a partir de where-are-you.
const reqSix = reqOne.nextSibling;
//Acesse o third-child a partir de where-are-you.
const reqSeven = reqOne.nextElementSibling;
//Acesse o third-child a partir de parent.
const reqEight = document.getElementById('third-child');
const reqFinal = reqEight.parentElement;

