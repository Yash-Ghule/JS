// Reduce function

const myNum = [1,2,3]

// const myTotal = myNum.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)  // 0 here is the starting point for acc i.e accumulator


// By arrow functions
// const myTotal = myNum.reduce( (acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNum.reduce( (acc, currval) => acc + currval, 0) // implicit way

// console.log(myTotal);


const shoppingcart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "java course",
        price: 5999
    },
    {
        itemName: "ds course",
        price: 15999
    }
]

const priceToPay = shoppingcart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
