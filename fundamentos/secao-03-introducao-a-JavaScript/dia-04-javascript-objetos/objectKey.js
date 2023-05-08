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

// - Tente criar uma função que exiba as habilidades do objeto student. Nesse caso, cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”.

let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
};

let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
};

function listSkills(student) {
    let arrayOfSkills = Object.keys(student);
    for (let index in arrayOfSkills) {
        console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
    }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);