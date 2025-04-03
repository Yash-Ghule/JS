// Higher order Array loop

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
 
for (const num of arr) {
    // console.log(num);    
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // this will not be printed

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// shortcut
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {  // here 'myObject is not iterable so it will give error
//     console.log(key, ':-', value);   
// }

// ' for of ' is not used to iterate objects, it is used for maps

