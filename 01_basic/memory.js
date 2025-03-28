// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "yashdotcom"

let anothername = myYoutubename
anothername = "newchannel"

console.log(myYoutubename);
console.log(anothername); // after writing 'newchannel' the value gets changed 

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"

console.log(userOne.email); // both of these will have same output
console.log(userTwo.email);
