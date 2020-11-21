// Tips: to undertand it, follow the sequency please 😤 !!

function tornaArray(company, ...custumers){ //1° you can see the "rest" when we receive elements 🤨
    console.log(company, custumers);
}

tornaArray('Instagram', 'Steve J.', 'Mark Z.', 'Others');//the company name + clients;



//Spread operator is useful when you wanna you Hooks on React.. you can "spread" values into an array for example:

let arr = ['Daniel', 23, true];

let person = [...arr, 'programmer', 'student'];

console.log(arr);
console.log(person);