const reqOne = document.getElementById('where-are-you');

const reqTwo = reqOne.parentElement;
reqTwo.style.color = 'green';

const reqThree = reqOne.firstElementChild;
reqThree.innerText = "Looking for wisdom";

const reqFour = document.getElementById('parent').firstElementChild;

const reqFive = reqOne.previousElementSibling;

const reqSix = reqOne.nextSibling;

const reqSeven = reqOne.nextElementSibling;

const reqEight = document.getElementById('third-child');
const reqFinal = reqEight.parentElement;

