// Primitive type:
// String, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLogin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 126645287965212n



// Reference / Non Primitive type:
// Array, objects, functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello");
}

console.log(typeof myFunction);
