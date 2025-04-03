// Filter map and reduce

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values); // it gives 'undefined'



// Syntax :
// filter(return_function) => condition

const myNum = [1,2,3,4,5,6,7,8,9,10]
// myNum.filter( (num) => num > 4) // it won't print anything

// const newNum = myNum.filter( (num) => num > 4) // arrow function is used implicitlity

// const newNum = myNum.filter( (num) => {  // another way to write it
//     return num > 4  // 'return' keyword is imp here
// })


// by 'forEach' 
// const newNum = []
// myNum.forEach( (num) => {
//     if (num > 4) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History') // history books

// userBooks = books.filter( (bk) => {return bk.publish >= 2000}) // books that are publsihed after or in 2000

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"  // books that are published after 1995 and are of genre history
})


console.log(userBooks);
