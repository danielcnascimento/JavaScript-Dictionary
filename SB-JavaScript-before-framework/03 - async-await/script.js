// this is this is also very famous on React/Vue

//let's use this api to make some examples of listing: https://cguni.herokuapp.com/questions

async function fetchingMyData(url){ //async will say "this will be execulted asyncronously and i will use "await" to retrive data from somewhere"
    
    const response = await fetch(url); //this constant will receive the function fetch, and that await will wait will a data be retrived from that url
    const jsonBody = await response.json();// after that data be retrived, we can now turn it a JSON data. Remember that we can use awai only with promises and with async functions
    console.log(jsonBody);

    return jsonBody;
};


fetchingMyData('https://cguni.herokuapp.com/questions').then( resp =>{
    console.log('now i can access the values, look at this ID" : ' + resp.id )
}) // we will have use "then" because only after the data from that url be retrived, we can use its values
