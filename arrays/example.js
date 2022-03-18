
// FIND

var arr = [{a:1}, {a:2}];

arr.find(function match(v) {
    return v && v.a > 1;
}) 
// return {a:2}

arr.find(function match(v) {
    return v && v.a > 10;
}) 
// return undefined




// FIND INDEX

arr.findIndex(function match(v) {
    return v && v.a > 10;
}) 
// return -1




// INCLUDES 

['XS', 'SM', 'MD'].includes('XS')             // return true

['XS', 'SM', 'MD'].includes('XS', 'SM')       // return true




// FLAT

var nestedValue = [1, [2, 3], [[]], [4, [5]], 6];

nestedValue.flat(0);                        // [1, [2, 3], [[]], [4, [5]], 6]

nestedValue.flat(/* default: 1*/ );         // [1, 2, 3, [], 4, [5], 6]

nestedValue.flat(2);                        // [1, 2, 3, 4, 5, 6]




// MAP 

[1, 2, 3].map(function tuples(v){
    return [v*2, String(v*2)];      
}) 
// return [[2, "2"], [4, "4"], [6, "6"]]