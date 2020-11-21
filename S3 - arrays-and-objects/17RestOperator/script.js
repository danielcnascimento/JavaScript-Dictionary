// to undertand it, follow the sequency please 😤 !!


function tornaArray(...args){ //1° lets make a function ! the "..." are the RestOperator
                              // this will receive a sequency of params 🤨

    let newArr = [] // 💡 declaring the array to receive the params above

    for(let arg of args){ // 😉 yep its a new way to make for statment ! we should use it more often 🤔.

        newArr.push(arg) // do you remember push function ? lets practice it to push elements to a new array, but since its push, the last element will be the first on the new array.
                         
    }
    
    console.log(newArr)// showing the inverted array, comparing to the one above 👇

}

tornaArray(0,1,2,3,4,5,6,7,8,9); //passando parametros para o rest operator '...'