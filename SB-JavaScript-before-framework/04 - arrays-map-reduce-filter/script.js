// filter retorna um novo array com todos os elementos que passaram no teste de tal função fornecida.
// filter returns true for each element that has passed the condition provided by such function.

// filtering elementis that got "R$" in the elements, remember that if functions provided to filter is true, 
// so this will return the elements filtered in that "valores" array.

// > Filter
let valores = [
    "R$ 400",
    "R$ 450",
    "R$ 490",
    "R$ 150",
    "R$ 300",
    "valores numericos",
    "R$ 700",
    "contas a pagar",
    "R$ 400"
];

const filterValor = valores.filter(valor =>  valor.includes('R$'));
 
console.log(filterValor);

// map() aplicará a função em cada elemento de um array, e o resultado será um novo array clonado do original
// map() will apply a functions to each element in an array, and return its new values to a new decoy array

// > Map
const mapeaValores = filterValor.map(function(valor){
    return Number(valor.replace('R$ ', ''));
});

console.log(mapeaValores);

//reduce() retornará sempre um unico valor, ele começa pelo primeiro item da array da esquerda para a direita e pega já o segundo para realizar uma operação, no final da pra ver que ele acumula cada valor no array, e retorna.
//reduce() returns only a single value,. it runs the array from left to right, taking the fist element, to do something else on the second element, it accumulates each element in the array, and returns.

const reducePreco = mapeaValores.reduce(function(acc, item){
   return acc+item
})

console.log('valores acumulados: ' + reducePreco);