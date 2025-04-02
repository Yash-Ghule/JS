const user = {
    username: "y",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // it talks about currect context and values
        
    }
}

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this); // this gives empty object '{}', as there is nothing in global context


// Global object in browse is windows object


// function chai(){
//     let username = "yash"
//     console.log(this.username); // it gives 'undefined'
// }
// chai()

// const chai = function(){
//     let username = "yash"
//     console.log(this.username); // it gives 'undefined'
// }
// chai()

const chai = () => {
    let username = "yash"
    // console.log(this.username); // it gives 'undefined'
    // console.log(this) // it gives empty '{}'
}
chai()

// Syntax for Arrow function
// const name() => {}

//ex:
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));


// Implicit return
// const addTwo = (num1, num2) =>  num1 + num2
// or
// const addTwo = (num1, num2) => (num1 + num2)


// const addTwo = (num1, num2) => {username: "yash"} // it gives 'undefined'
const addTwo = (num1, num2) => ({username: "yash"}) // this works right

console.log(addTwo(3,4));
