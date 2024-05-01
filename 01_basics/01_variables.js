const accountId = 144553
let accountEmail = "saurabhkumar@gmail.com"
var accountPassword = "12345"
accountCity = "Gaya"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sk@sk.com"
accountPassword = "453454453"
accountCity = "Patna"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
