// 💡 debugger is besically how you can use break to stop your code, and play it slowly.. 
// you can see all changes, before they commit and after commit 🤔 you decide when to play.
// ✍️ you will use it in large projects.. for small ones, use console.log 😉
let a = 1;
let b = 2;
let c = 3;

if(c > a){

    a = b;
    console.log(a);
}

for(let i = 5; i > 0; i--){

    b++;

    a = a + c+ 1;
    console.log(a);
    c += 2;

    debugger; // now run the HTML on your brower and check "source" on that top bar, you can see a " ▶️ " tap it and check debugger magic.

}

console.log('valor de a fora do escopo :' + a);

if(b == a ){

    a++;

    console.log(a);
}else{
    a = a + b + c;
    console.log(a);
}

a = a * b;
console.log(a);

