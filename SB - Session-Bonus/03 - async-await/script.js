// this is this is also very famous on React/Vue

//let's use this api to make some examples of listing: https://cguni.herokuapp.com/questions

async function fetchingMyData(url){ //async will say "this will be execulted asyncronously and i will use "await" to retrive data from somewhere"
    
    const response = await fetch(url); //this constant will receive the function fetch, and that await will wait will a data be retrived from that url
    const jsonBody = await response.json();// after that data be retrived, we can now turn it a JSON data. Remember that we can use awai only with promises and with async functions
    console.log(jsonBody);

    return jsonBody;
};


const resposta = fetchingMyData('https://cguni.herokuapp.com/questions'); // we can send this function to a const, so we will be able to use that returned JSON

console.log('minha requisição restornando sem estar preparada: ' + resposta)

resposta.then(resp => { // okay, we want to use the retrived data, but it must be done sequentially, we have to wait everythin be done, thats why we use "then", to wait the data be retrive and THEN use them
    
    console.log('minha requisição preparada, usando "then" : ' + resp )

})