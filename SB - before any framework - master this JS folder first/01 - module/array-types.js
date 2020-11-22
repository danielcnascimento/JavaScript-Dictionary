
// >>>> Module: thats how we can export the functions we want to make, we use "export" 

export function pushArray(...arr){ //im using rest to say that my arguments will be an array

    let newArray = [];

    arr.forEach(element => {
       newArray.push(element);
    });

    return newArray;

}

export function makeItAnArray(string){ //now i will take an string and make it an array, lets see:

    let newArray = string.split(" "); // im saying that " " blanck space will interpolate and make me an array

    return newArray;
}