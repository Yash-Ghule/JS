// if - syntax
// if(condition){

// }

if(true){
    // code over here will get executed only if the condition is true
}

// Comparison operator:
// <, >, <=, =>, ==, !=, ===, !==

// ex:
// const temp = 41
// if(temp < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("more than 50");
// }
// console.log("execute"); // this will always be executed


// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // if we write this here it will give error that 'power is not defined' as it is out of scope here


// Shorthand

//const balance = 1000
// if(balance > 500) console.log("test"); // it has implicit scope

// if(balance > 500) console.log("test"), console.log("test2"); // it has implicit scope with multiple run statements but never write code like this

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 7500");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");   
// }


const userLoggedIn = true
const debitcard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true


// if(userLoggedIn && debitcard && 2==3){ // for checking multiple AND conditions
//     console.log("Allowed to shop");   
// }

if(loggedinFromGoogle || loggedinFromEmail){ // for checking multiple OR conditions
    console.log("User logged in");   
}

