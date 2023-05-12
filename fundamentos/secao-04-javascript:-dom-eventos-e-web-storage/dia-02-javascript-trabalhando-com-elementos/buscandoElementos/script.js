// - Acesse o elemento where-are-you.

const whereAreYou = document.getElementById('where-are-you');

// - Acesse parent a partir de where-are-you e adicione uma color a ele.

const parent = whereAreYou.parentElement;
parent.style.color = 'silver';

// - Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.

const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'Eu sou o elemento filho do filho!';

// - Acesse o first-child a partir de parent.

const firstChild = parent.firstElementChild;

// - Acesse o first-child a partir de where-are-you.

const firstChildTwo = whereAreYou.previousElementSibling;

// - Acesse o texto Attention! a partir de where-are-you.

const text = whereAreYou.nextSibling;

// - Acesse o third-child a partir de where-are-you.

const thirdChild = whereAreYou.nextElementSibling;

// - Acesse o third-child a partir de parent.

const thirdChildTwo = parent.lastElementChild.previousElementSibling;

