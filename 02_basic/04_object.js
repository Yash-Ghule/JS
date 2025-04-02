//const tinderuser = new Object() // this is a singleton object
const tinderuser = {} // this is not a singleton object

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularuser = {
    email: "ho@gmail.com",
    fullname:{
        userfullname:{
            firstname: "yash",
            lastname: "ghule",
        }
    }
}

// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

//const obj3 = Object.assign(obj1, obj2) // this is correct way
//const obj3 = Object.assign(target, source) // this is the syntax
// so '{}' is the target and rest obj's are sources 

// const obj3 = Object.assign({}, obj1, obj2) // it is recommended to write like this

const obj3 = {...obj1,...obj2} // mostly be using this
//console.log(obj3); 


const users = [
    {
        id: 1,
        email: "y@gmail.com",
    },
    {

    },
    {

    },
]

users[1].email

// console.log(tinderuser);

// console.log(Object.keys(tinderuser)); // data type os this is array
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


// console.log(tinderuser.hasOwnProperty('isLoggedIn')); // o/p is true


//----------------------------------------------------------------------------------------------
// De-structure

const course = {
    coursename: "JS hindi",
    price : "999",
    courseIntructor: "yash"
}

// course.courseIntructor

const {courseIntructor : instructor} = course
console.log(instructor);

// This is JSON
// {
//     "name" : "yash",
//     "age": 12,
//     "price": free
// }


// API in array format
// [
//     {},
//     {},
//     {}
// ]

