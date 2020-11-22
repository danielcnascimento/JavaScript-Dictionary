// functions with params are inputs to our projets,

//in this sample we are validating id a string is indeed a string:

function exception(name){

    if(typeof name != 'string'){
        throw Error('its not a string')
    }else{
        alert('welcome ' + name)
    }

}

exception('Daniel')

exception(5)