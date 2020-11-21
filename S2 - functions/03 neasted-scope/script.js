let y = 'olá'

const aninhado = function(){

    let y = 5
    console.log(y)

    if( y == 5){
        let y = 'olá mundo!'
        console.log(y)
    }
}

aninhado();
console.log(y)