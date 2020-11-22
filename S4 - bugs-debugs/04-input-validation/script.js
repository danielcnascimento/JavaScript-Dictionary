// functions with params are inputs to our projets,

//in this sample we are validating if a number is a number indeed:

function validation(num){

    let number = Number(num)

    if(Number.isNaN(number)){
        return console.log('por favor, digite um número válido');
    }else{
        return 1;
    }

}

validation(5);
validation('abc');

