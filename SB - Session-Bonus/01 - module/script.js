// since we are using raw JS, we have to put the extension of the files (.js) but when you start a framework like react Js
// you dont need it anymore, due to webback that will undertand this reference hust by the name of the file.

import {pushArray, makeItAnArray} from './array-types.js'; // We use "import" and call that file which our functions are!
import myRandom from './return-me-a-random.js';// ✨✨ you will see it in React or/and Vue .. always.
import allFunctions from './circle.js'; // importing just a functions from circle.js, we are using braces because we are importing an object

console.log("Thats my random number: "  + myRandom());

console.log(pushArray(0, 1, 2, 3, 4, 5));
console.log(makeItAnArray("As i said, I am a developer!"));

//guys, im using module to import that function inside the folder : circle.js

console.log("this is my exported random: " + allFunctions.myRandom());
console.log(allFunctions.area(5));
console.log(allFunctions.circuference(8));