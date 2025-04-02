// let a = 10
// const b = 20 
// var c = 30

// {} - scope


// var c = 300
let a = 300


if(true){ // this is block scope , outside of this is global scope
    let a = 10
    const b = 20 
    // var c = 30 // if we write ' c = 30 ' it gives same issues

    //console.log("INNER: ", a);
}

// console.log(a); // this is show error that 'a' is not defined, which is right as it is defined in the above scope
// console.log(b); // this is show error that 'b' is not defined, which is right as it is defined in the above scope
// console.log(c); // it gives o/p as 30, even if the var c = 300 was written above it will still give o/p as 30 that's why we don't use 'var'


//console.log(a); // o/p is 300

/*
After writing 'INNER' we get o/p as
INNER:  10
300
*/


// The global scope in browse and the global scope in node environment is different 

//------------------------------------------------------------------------------------

// Nested scope

// The child function can access the variables from the parent function but it cannot be vice versa

function one(){
    const username = "yash"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // we first get error in this line then we comment it
    
    two() // it gives o/p as 'yash' which is correct
}

// one() // as 'one' is executed it executes 'two' and if we comment the 'two()' the we don't get any o/p as the 'one()' is not executed

if(true){
    const username = "yash"
    if(username === "yash"){
        const website = " youtube"
        // console.log(username + website); // o/p = yash youtube
    }
    // console.log(website); // first error
}

// console.log(username); // second error


// ++++++++++++++++ Interesting +++++++++++++++++++++

console.log(addone(5)) // we can write 'addone' like this and it works 

function addone(num){
    return num + 1
}

// addone(5) // this is will return but not print anything


addTwo(4) // but we cannot write addTwo like this, bacause of the concept of hosting and we have holded it in a variable unlike in the above function

const addTwo = function(num){
    return num + 2
}

addTwo(5)

