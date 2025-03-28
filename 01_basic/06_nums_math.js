/*
const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)); // o/p = 23.9
// if it was 123.8966 then o/p = 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
*/

// ------------------------------ Math ----------------------------------

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min - 1)) + min)
