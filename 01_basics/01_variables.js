const accountId = 144553
let accountEmail = "raunak@google.com"
var accountPassword = "12345"
accountCity = "faridabad"
let accountState = "Haryana"

// accountId = 2 // not allowed


accountEmail = "Rk@sahni.com"
accountPassword = "21212121"
accountCity = "FBD"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


