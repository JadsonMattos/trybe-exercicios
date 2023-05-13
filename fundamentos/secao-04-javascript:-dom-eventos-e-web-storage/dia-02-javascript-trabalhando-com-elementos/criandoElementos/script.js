// Crie um irmão para elementoOndeVoceEsta.

const pai = document.getElementById('pai');
const brotherWhereYouAre = document.createElement('section');
brotherWhereYouAre.id = 'brotherWhereYouAre';
pai.appendChild(brotherWhereYouAre);

// Crie um filho para elementoOndeVoceEsta.

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const childElementWhereYouAre = document.createElement('section');
childElementWhereYouAre.id = 'childElementWhereYouAre';
elementoOndeVoceEsta.appendChild(childElementWhereYouAre);

// Crie um filho para primeiroFilhoDoFilho.

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const childFirstChildOfChild = document.createElement('section');
childFirstChildOfChild.id = 'childFirstChildOfChild';
primeiroFilhoDoFilho.appendChild(childFirstChildOfChild);

// A partir desse filho criado, acesse terceiroFilho.

const terceiroFilho = childFirstChildOfChild.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);