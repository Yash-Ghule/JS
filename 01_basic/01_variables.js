const accountId = 123456
let accountEmail = "abc@gmail.com"
var accountPassword = "852369"
accountCity = "Pune"
let accountState;

// accountId = "74125"

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "bd@dc.com"
accountPassword = "8965412"
accountCity = "NY"

console.log(accountId);
 
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])