let calculadora = {

    somar : function sum(a, b){
        return a+b;
    },

    subtrair : function  sub(a, b){
        return a-b;
    },

    multiplicar: function mul(a, b){
        return a*b;
    },

    dividir: function div(a, b){
        return a/b;
    }
}

let a = Number(prompt('entre com o prim valor: '))
let b = Number(prompt('entre com o segundo valor: '))



let acao = prompt('somar, dividir, multiplicar ou subtrair esses valores ?: ')

switch(acao){
    case 'somar':
        alert(calculadora.somar(a, b))
        break;
    case 'subtrair':
        alert(calculadora.subtrair(a, b))
        break;
    case 'multiplicar':
        alert(calculadora.multiplicar(a, b))
        break;
    case 'dividir':
        alert(calculadora.dividir(a, b))
        break;
    default : alert('entre com as palavras "somar", "subtrair", "multiplicar" ou "dividir", atualiar e tentar novamente...');
}
