function validaNumero(num){
    return new Promise((resolve, reject)=>{
    if(num == 2){
        resolve(console.log('resolvido'))
    }else{
        reject(new Error('Não conseguiu resolver a promessa, Erro'))
    }
})
};

validaNumero(2);
validaNumero(3);

