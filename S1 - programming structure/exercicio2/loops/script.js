// do while :

// do{
//     console.log(y*2)
//     y -= 5
// }while(y >= 0)

// for : 

// let resumo = prompt('Entre com uma Letra, entre A, B ou C', 'D')

//     while (resumo != "A") {
//         console.log('Errou!')
//         resumo = prompt('Não foi dessa vez !!')
//         if (resumo == "A") {
//         console.log("Parabens!! ");
//         }
//     }

let nome = 'Daniel'

for(i = 0; i <= 20; i++){

    console.log(i)

    if( i == 3){
        nome = 'Hessa'
        console.log(`Meu nome agora é ${nome}`)
    }

    if( i == 5 && nome == 'Hessa'){
        nome = 'Junior'
        console.log(`Agora meu indexados é ${i} e meu nome mudou para: ${nome}`)
    }

    if( i == 10){
        nome = 'Joaquim da silva'
        console.log(`Meu indexador está no: ${i}, e meu nome agora é ${nome}, parei aqui!`)
        break
    }
}