// - Obtenha o valor “Serviços” do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// - Procure o índice do valor “Portfólio” do array menu:

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu1.indexOf('Portfólio');

console.log(indexOfPortfolio);

// - Adicione o valor “Contato” no final do array menu.

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu2.push('Contato');

console.log(menu2);

// - Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let value of groceryList) {
    console.log(value);
}

// - Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let elements of names) {
    console.log(elements);
}

