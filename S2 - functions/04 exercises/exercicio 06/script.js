function tipoDeVariaveis(v1){
   
    if(typeof v1 == 'string'){

        console.log('este dado é uma string!')

    }else if ( typeof v1 == 'number'){  

        console.log('este dado é um number !')

    }else{

        console.log('este dado é booleano!!')

    }

}

tipoDeVariaveis(1);
tipoDeVariaveis('olá')
tipoDeVariaveis(true)