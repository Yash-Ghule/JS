// Falsy values:
// false, 0, -0, BigInt 0n, "" empty string, null, undefined, NaN

// Truthy values:
// "0", 'false', " " space is given in string, [], {}, function(){}, 

//---------------------------------------------------------------------------------------------
// const userEmail = "y@gmail.com" // true
// const userEmail = "" // false
const userEmail = [] // true

// if(userEmail){     
//     console.log("Got user email");
// } else{
//     console.log("Don't have user email");
// }

// here we have not compared or checked anything still this string value is considered as true, which is known as truthy value
// on other hand if we passed an empty string "" then it gives o/p as 'Don't have user email' , which means it automatically condsiders it as false known as falsy value


// how to check empty array
if(userEmail.length === 0){
    //console.log("array is empty");
}

// how to check empty object
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    //console.log("Object is empty");
}


// false == 0 // true
// false == '' // true
// 0 == '' // true


//------------------------------------------------------------------------------
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5 is assigned
// val1 = null ?? 10 // 10 is assigned
// val1 = undefined ?? 15 // 15 is assigned
val1 = null ?? 10 ?? 5 // 10 is assigned

console.log(val1);


//-------------------------------------------------------------------------------
// Ternary operator

// condition ? true : false

const icePrice = 100
icePrice >= 80 ? console.log("less than 80") : console.log("more than 80");
