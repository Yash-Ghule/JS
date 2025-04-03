const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.map( (num) => num + 10)
// console.log(newNum);

// Chaining

const newNum = myNum
                .map( (num) => num * 10)
                .map( (num) => num + 1)  // over here the values are passed from the above map function which is 10,20,30......
                .filter( (num) => num >= 40)

console.log(newNum);
