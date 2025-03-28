// Arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["batman", "superman"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);

// Array Methods

// Push
// myArr.push(7)
// console.log(myArr);

// Pop
// myArr.pop() // removes the last value in array
// console.log(myArr);

// myArr.unshift(9) // gets added in the start of the array
// myArr.shift() // removes the '9'

// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()
// console.log(newArr); 

// console.log(typeof newArr); // type is string


// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // splice manipulates the original array and makes changes in it where 'slice' does not do it
console.log("C ",myArr);
console.log(myn2);
