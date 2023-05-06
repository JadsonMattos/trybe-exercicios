let customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

console.log(customer1);
customer1.lastName = 'Faria';
console.log(customer1);

let customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

//--------------------------------------------------------------------------------------

let customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

let newKey = 'lastName';
let lastName = 'Ferreira';

function addProperty(object, key, value) {
    object[key] = value;
};

addProperty(customer, newKey, lastName);
console.log(customer);

// - Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {}

function addProperties(object, key, value) {
    object[key] = value;
};
addProperties(student, 'name', 'Jadson de Sousa Mattos');
addProperties(student, 'email', 'jadson.sousamattos@gmail.com');
addProperties(student, 'phone', '48 99612-2449');
addProperties(student, 'github', 'github.com/JadsonMattos');
addProperties(student, 'linkedin', 'linkedin.com/in/jadsonmattos');
console.log(student);