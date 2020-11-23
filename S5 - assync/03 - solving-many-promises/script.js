const constante1 = Promise.resolve( //quando usamos um metodo de uma classe, não precisamos usar "new"
    setTimeout(()=>{
        console.log('olá mundo')
    }, 2000)
);


const constante2 = Promise.resolve(6);

const validaString = texto => {
    return new Promise((resolve, reject) => { //veja que Promise é instanciada, então usa New
        if(texto == "string"){
            resolve(console.log('é uma string de verdade'))
        }
    })
}

validaString('ola');