let grupoA = 100;
let grupoB = 50;

//✍️ JSX são expressões, e expressões serão importantes para desenvolvimento com React
//✍️ JSX are expressions, and expressions will be importante when studying React

// Expressões podem ser arrow functions ou operações ternárias
// Expressions can be arrow functions or ternary operators

// variaveis constantes recebem expressões
// expressions can be assignied to a const variable

const vencedor = grupoA > grupoB ?  'vence Grupo A ' : ' Vence grupo B ';

console.log(vencedor)

//nesse caso, o "&&" retorna caso não só a condição, mas o valor a ser retornado for true
//its "&&", and can only return a result when both sides are true, look :

const maior = grupoA > grupoB && 'vence grupo A';

console.log(maior);