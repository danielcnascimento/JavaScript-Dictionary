let pessoa = {
    nome: 'Daniel',
    idade: '23',
    estado: 'Rio de Janeiro',
    cpf: 123456789-20,
    'estado civil': 'solteiro',
    profissao: 'programador junior',
}

// console.log(pessoa.profissao)

// console.log(pessoa["estado civil"])

// pessoa.ultimoNome = 'Nascimento' // criei e  defini um valor para essa propriedade

// console.log(pessoa.ultimoNome);

let familia = {
    irmao : true,
    pai: 'Flavio',
    mae: 'Fatima',
}

console.log(pessoa);

Object.assign(pessoa, familia);

console.log(pessoa);