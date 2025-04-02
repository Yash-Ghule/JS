// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "yash",
    "Full name": "yash ghule",
    //mySym:"mykey1",
    [mySym]:"mykey1", // this is the correct syntax
    age : 10,
    location: "pune",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email) // this is also a way but it is not a good practice
//console.log(JsUser["email"]) // this method is used because below is given a example

// console.log(JsUser.Full name) // this is not possible , infact it gives error and there is no such syntax
//console.log(JsUser["Full name"]) // this is the only way


//console.log(JsUser.mySym) // o/p will be given as mykey1
//console.log(typeof JsUser.mySym) // string, which is wrong it should be a symbol

//console.log(JsUser[mySym]) // this is the correct way to write it, the o/p is same 


JsUser.email = "yash@gmail.com" // this is how you change the values
// Object.freeze(JsUser) // remove this line once done as it keeps it freeze till the line is removed
JsUser.email = "yashhh@gmail.com"
//console.log(JsUser); // in o/p email is changed to "yash@gmail.com" but as we freezed it the next statement didn't work


JsUser.greeting = function(){
    console.log("hello");
}

JsUser.greetingTwo = function(){
    console.log(`hello, ${this.name}`); // 'this' is used to reference a saved/same object
}

//console.log(JsUser.greeting) // o/p will be [Function (anonymous)]
console.log(JsUser.greeting()) 
console.log(JsUser.greetingTwo()) // there might be 1-2 'undefined' in the terminal dw about them 