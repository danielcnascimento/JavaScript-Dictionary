const nomeComIdade = (nome, idade) =>{

    if(nome === undefined){
        nome = prompt('entre com seu nome, por favor: ')
        console.log(`Bem-vindo, ${nome}, sua idade é de : ${idade}`)
    }else{
        console.log(`Bem-vindo, ${nome}, sua idade é de : ${idade}`)
    }

}

nomeComIdade('Daniel');
nomeComIdade('Daniel', 23)
nomeComIdade(undefined,23)