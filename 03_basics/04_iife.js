// Immediately Invoked Function Expressions (IIFE)

// We face problems from global scopes pollution, so to remove it we use IIFE
// A function that executes immediately


// function chai(){
//     console.log(`DB CONNECTED`);   
// }
// chai()

// This is the syntax to write IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);   
})(); // it is imp to write this ';' as it does not know when to stop so if we write another IIFE after this without a ';' it will give error

(() => {
    // simple IIFE
    console.log(`DB CONNECTED TWO`);  // o/p = DB CONNECTED TWO
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);  // o/p = DB CONNECTED TWO yash
})("yash");