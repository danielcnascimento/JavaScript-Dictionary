function tornaArray(...args){ //pegando o parametro desta função

    let newArr = [] // declarando um array para receber os parametros

    for(let arg of args){
        newArr.push(arg)
    }
    
    console.log(newArr)// mosttando um array invertido do que foi criado

}

tornaArray(0,1,2,3,4,5,6,7,8,9); //passando parametros para o rest operator '...'