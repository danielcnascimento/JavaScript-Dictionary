// filter retorna um novo array com todos os elementos que passaram no teste de tal função fornecida.
// filter returns true for each element that has passed the condition provided by such function.

// filtering elementis that got "R$" in the elements, remember that if functions provided to filter is true, 
// so this will return the elements filtered in that "valores" array.

// > Filter
let valores = [
    "R$ 400",
    "R$ 150",
    "R$ 300",
    "valores numericos",
    "R$ 700",
    "contas a pagar",
    "R$ 600"
];

const filter = valores.filter(filtered =>  filtered.includes("R$"));
 
console.log(filter);

// map() aplicará a função em cada elemento de um array, e o resultado será um novo array clonado do original
// map() will apply a functions to each element in an array, and return its new values to a new decoy array

// > Map
const mapeaValores = filter.map(valor => Number(valor.replace("R$ ", "")));

console.log(mapeaValores);