// Iterations in Objects

const myObjects = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObjects) {
    // console.log(`${key} shortcut for ${myObjects[key]}`);   
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // here is returns the keys / indexes not the values
    //console.log(programming[key]);    
}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); // it is not iterable, so not o/p is given
// }


