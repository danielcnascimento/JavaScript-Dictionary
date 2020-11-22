//fetch will search sushc url, and bring you values, or send values:
//this will be a task, uncoupled from the project.. its an async fucntions.

//let's use this api to make some examples of listing: https://cguni.herokuapp.com/questions

fetch("https://cguni.herokuapp.com/questions").then( res => res.json()).then(jsonBody => {

    document.querySelector('#app').innerHTML = jsonBody.id;
    console.log(jsonBody);

})

// how you can send data to your api.. its just an example tho.

const data = {
    nome: 'daniel',
    age: 23,
    profission: 'programmer',
    cidade: 'Rio de janeiro',
    pais: 'BR',
    email: 'test@gmai.com',
    senha: '123456'
}

fetch("https://cguni.herokuapp.com/questions", {
    method: "POST",
    headers: {
        "Content-type":"application/json"
    },
    body: JSON.stringify(data) // whenever we wanna send data through an "post" request, we have to make it into string
});





