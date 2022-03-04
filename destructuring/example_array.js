
// destructuring array data

function data() {
    return [1,, 3, 4];
}

const [
    first, 
    second = 2,     // default if it comes undefind
    third
] = data(); 






// rest syntax 

function data () {
    return [1, 2, 3, 4, 5, 6, 7]
}

const [
    first, 
    second, 
    third, 
    ...rest         // take the rest of the array as an array
] = data(); 

console.log(rest);  // [4, 5, 6, 7] 




// separated asignment
// also work with separated declaration, [] only used to asign, not to declare.

const full, first, second, third, fourth; 

[
    first, 
    second, 
    third, 
    ...rest        
] = full = data();  // full will be the full tuple


// asignement on object

const full;
const o = {};

[
    o.first, 
    o.second, 
    o.third, 
    ...o.rest        
] = full = data(); 


// asignement on array

const full = data();
const o = [];

[
    o[3], 
    o[10], 
    o[20], 
    ...o[100]        
] = full;       // also work on the resulted array, don't have to be the function with return here 






// ignoring some entry of the array with a comma

const full, first, third, fourth; 

[
    first, 
    ,               // do nothing with data()[1] 
    third, 
    ...rest        
] = full = data();  






// swaping data

var x = 10; 
var y = 10;

[y, x] = [x, y];





// paramters array
// directly destructure in the parametere slot 

function data([
    first, 
    second = 20 ,   // default value  
    third
] = []) {   // callback default empty array to prevent type error 
    console.log(first); 
}





// fallback empty array 

const full, first, second, third, fourth; 

[
    first, 
    second,              
    third, 
    ...rest        
] = full = data() || [];    // provid an empty array as fallback, avoid type error if data returns undefined 






// nested destructuring pattern

function data () {
    return [1, [2, 3], 4]
}

const [
    first, 
    [
        second, 
        third, 
    ], 
    fourth, 
] = data(); 

