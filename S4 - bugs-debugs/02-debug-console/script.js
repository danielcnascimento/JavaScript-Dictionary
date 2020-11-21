//its the most famous way to debug your code 😅 using console log to follow whats going on to such a variable 

let a = 1;
let b = 2;
let c = 3;

if(c > a){

    a = b;
    console.log(a); // 👈 here
}

for(let i = 5; i > 0; i--){

    b++;

    a = a + c+ 1;
    console.log(a); // 👈 here
    c += 2;


}

console.log('valor de a fora do escopo :' + a); // 👈 here

if(b == a ){

    a++;

    console.log(a); // 👈 here
}else{
    a = a + b + c;
    console.log(a);
}

a = a * b;
console.log(a); // 👈 here

