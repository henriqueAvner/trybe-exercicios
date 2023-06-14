// Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai');
const newElement = document.createElement('section');
newElement.id = 'newElement';
pai.appendChild(newElement);

// Crie um filho para elementoOndeVoceEsta.
const element = document.getElementById('elementoOndeVoceEsta');
const newElementChild = document.createElement('section');
newElementChild.id = 'newElementChild';
element.appendChild(newElementChild);

// Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const newGrandson = document.createElement('section');
newGrandson.id ='newGrandson';
primeiroFilhoDoFilho.appendChild(newGrandson);

// A partir desse filho criado, acesse terceiroFilho.
const accesThird = newGrandson.parentElement.parentElement.nextElementSibling;

console.log(accesThird);