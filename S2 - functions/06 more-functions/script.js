function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log('pode dirigir!')
    }else{
        console.log('não pode dirigir')
    }
}

console.log(podeDirigir(14,true));
console.log(podeDirigir(18,false));
console.log(podeDirigir(19,0));
console.log(podeDirigir(19,1));