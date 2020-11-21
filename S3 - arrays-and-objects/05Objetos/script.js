let pessoa = {
    name: 'Daniel',
    age: '23',
    state: 'Rio de Janeiro',
    id: 123456789-20,
    'you single': true, // 👈 to make a property with space use space between words
    profissao: 'programador junior',
}

//guys .. just some examples below 👇 but i want you to erase it and try yourself 🤨

// console.log(pessoa.profissao) 

// console.log(pessoa["estado civil"])

// pessoa.ultimoNome = 'Nascimento' // criei e  defini um valor para essa propriedade

// console.log(pessoa.ultimoNome);

let familia = {
    irmao : true,
    pai: 'Flavio',
    mae: 'Fatima',
}

//thats something used second my teacher .. you can fucking JOIN OBJECTS 🤩 obove i made my "family" object 
// i can use the father of all objects i make called "Objects" to call a object method: assign to define a target 🎯 and source ℹ️
 
console.log(pessoa);

Object.assign(pessoa, familia);

console.log(pessoa);