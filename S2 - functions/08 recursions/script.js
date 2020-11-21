const recursao = (n) =>{

    if( n - 1 <2){

        console.log('fim da recursividade!')

    }else if (n % 2 != 0){

        console.log('Esse numero é impar')

        recursao( n - 1)

    }else{

        console.log('esse numero é par')

        recursao( n-2)

    }

}

recursao(73)