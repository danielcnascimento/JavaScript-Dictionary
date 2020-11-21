// 😉 ITS VERY HANDY!

// we can explode an array or/and objects, to make new variables 💥

let arr = [
    'Daniel',
    23,
    true
]
let [vName, vAge, vMarried] = arr; // remember destructuring arrays elements into var,
                                   // we have to place each var in sequence 💡 according to that destructured array:
                                   // since its array destructuring, use [] to make new var.


// what about destructuring properties from html to console.log them ? 

function elements({clientX, clientY}){ //this are properties of mousemove

    console.log(clientX, clientY);

}

document.documentElement.addEventListener("mousemove", elements); // everything in JS is objects! lets access HTML document (addEventListener) to access its method properties: the mousemove
                                                                  // and destructure mousemove's properties hehehehehee.

// want you to try them now: make your on, Open on Browser and check console. erase these ... 

// console.log(vName);
// console.log(vAge);
// console.log(vMarried);