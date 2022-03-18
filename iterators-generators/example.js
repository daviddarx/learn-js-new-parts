// ITERATORS

var str = "Hello";
var world = ["W", "O", "R", "L", "D"];

var it1 = str[Symbol.iterator]();       // iterator construction
var it2  = world[Symbol.iterator]();

it1.next();     // { value: "H", done: false }
it1.next();     // { value: "e", done: false }
it1.next();     // { value: "l", done: false }
it1.next();     // { value: "l", done: false }
it1.next();     // { value: "o", done: false }
it1.next();     // { value: undefined, done: true }

it2.next();     // { value: "W", done: false } 
// etc...



// OLD WAY OF ITERATING

var str = "Hello"; 

for (
    let it = str[Symbol.iterator](), v, result;  
    (result = it.next()) && !result.done && (v = result.value || true);
) {
    console.log(v); 
}
// "H", "e", "l", "l", "o"


// NEW WAY OF ITERATING 

var str = "Hello"; 
var it = str[Symbol.iterator](); 

for (let v of it) {
    console.log(v);     
}
// "H", "e", "l", "l", "o"

for (let v of str) {
    console.log(v);     
}
// "H", "e", "l", "l", "o"




