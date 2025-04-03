// For Each , mostly used method

const coding = ["js", "ruby", "java", "py", "cpp"]

// coding.forEach( function (item) {
//     console.log(item); 
// } )


// In arrow function

// coding.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        langName: "Javascript",
        langFileName: "js"
    },
    {
        langName: "Python",
        langFileName: "py"
    },
    {
        langName: "Java",
        langFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})