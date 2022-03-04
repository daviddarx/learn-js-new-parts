function data() {
    return { a: 1, b:2, c:4 , d:5, e:6 };
}

const {
    b: second,          // for objects, the order is not relevant 
    a: first, 
    c: third,
    ...rest             // rest syntax also work on objects
} = data(); 

console.log(rest); 






// default data

function data() {
    return { b:2, c:4 , d:5, e:6 };
}

const {
    b: second,          
    a: first = 45,      // default data for a, if it's not a key of the object 
    c: third,
} = data(); 





// variable decoration 

const first, second, third; 

({                      // when variable are already declared, we need to had  () around the asignment so that JS knows it's a destructuring pattern and not a block 
    a: first, 
    b: second, 
    c: third
} = data()); 





// fallback object

const first, second, third; 

const {                     
    a: first, 
    b: second, 
    c: third
} = data() || {};   // in case data() returns undefined 






// same namings as the source

function data() {
    return { a: 1, b:2, c:4 , d:5, e:6 };
}

const {
    b,
    a,
    c = 23,     // default value 
    ...rest      
} = data(); 





// nested objects 

function data() {
    return { 
        a: 1, 
        b:{
            c:3 , 
            d:4
        }, 
        e:6 
    };
}

const {
    a, 
    b: {
        c, 
        d
    }
} = data(); 





// parameter objects 

function data({
    a, 
    b = 20, 
    c
}) {
    console.log(a); 
}






// nested objects

var obj = {
    a:1, 
    b: {
        x: 2    
    }, 
    c:3
}

var {
    a, 
    b, // console.log(b) -> {x:2}
    b: {
        x: bValue // console.log(bValue);   -> 2 
    }, 
    c
} = obj; 






// mixed objects and array

var obj = {
    a:1, 
    b: [500, 5000],
    c:3
}

var {
    a, 
    b, // console.log(b) -> [500, 5000]
    b: [
        W,  //console.log(W); -> 500 
        Y   //console.log(Y):; -> 5000
    ], 
    c
} = obj; 