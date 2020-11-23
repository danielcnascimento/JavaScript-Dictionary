// Promises são promessas que vai retornar um valor em algum momento,
// ela promete que vai resolver tal função o tal operação, nisso podemos usar o retorno, ou seja o resultado da promise
// usando o then (então).


const p = Promise.resolve('5');

console.log(p) // mostrará "fullfiled" sinalizando que foi resolvido, e que pode ser usado o 'then' 

p.then(valor => console.log(`O valor é ${valor}`)) // o valor é 5 mesmo 
