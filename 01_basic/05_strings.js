const name = "yash"
const repoCount = 50

// console.log(name + repoCount + " Value"); // Do not write in this way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('yash-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); // -1 as it doesn't exist
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4) // cannot give negative values here
console.log(newString); // o/p =  yash

const anotherString = gameName.slice(-5,4)
console.log(anotherString); // o/p = ash

const newStringOne = "  yash  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://yash.com/yash%50add"

console.log(url.replace('%50', '-')); // o/p = https://yash.com/yash-add

console.log(url.includes('yash')); // o/p = true

console.log(gameName.split('-'));