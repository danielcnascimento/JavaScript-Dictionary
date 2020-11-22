// functions with params are inputs to our projets,

//in this exercise we can make a block of code using try Catch to test what is inside it
//try will try to run the code inside its block, and if there is an exception, the Catch will show us by using Error in it's block

//also, using it will not stop our project from running, it means that the error wont make that block run,
// but our project wont stop because of it 


try{

    const a = b + c;

}catch(err){
    
    console.log(`we've gotten an error: ${err}`);

}

console.log('but our application keeps to run!');