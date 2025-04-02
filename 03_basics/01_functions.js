function sayMyName(){
    console.log("Y");
    console.log("A");
    console.log("S");   
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log( number1 + number2 );
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    // console.log("y"); // this line will never be executed

    return num1 + num2 // this is 2nd way of writing it
}

// addTwoNumbers(3,4) // 7
// addTwoNumbers(3,"4") // 34
// addTwoNumbers(3,"a") // 3a
// addTwoNumbers(3,null) // 3

const result = addTwoNumbers(3,5)
//console.log("Result: ", result);


function loginUsrMsg(username = "sam"){ // sam here is a default value
    if(username === undefined){ // can write '!username' instead of the parameters written in 'if' as they both mean the same
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUsrMsg("yash"))
// console.log(loginUsrMsg) // o.p will be ' just logged in'
//console.log(loginUsrMsg()) // o/p will be "undefined just logged in"


//---------------------------------------------------------------------------------------

// function calculateCartPrice(val1, val2, ...num1){ // '...' is the rest operator here, it is also called spread the name changes according to the use case
//     return num1
// } // o/p for this is [500, 2000] as val1=200, val2=400, num1=500,2000

function calculateCartPrice(...num1){ // '...' is the rest operator here, it is also called spread the name changes according to the use case
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "yash",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) // we get o/p but if we change price to prices it gives 'undefined' so we need to check the type

//another way of writing
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
