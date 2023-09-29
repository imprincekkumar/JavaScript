const accountId = 14453 //values declared using const cant be changed
let accountEmail="pk111@gmail.com"
var accountPassword="12345"
accountCity="Patna"

let accountState;//undefined,value of variable need to be givem other wise it wil throw am undefined error

 
// accountId=2 //Not Allowed
accountEmail="pk87@gmail.com"
accountPassword="212121"
accountCity="Banglore"//this change happened because js is a safe language,variables can be declared even wthout declaring variable type

// console.log(accountEmail);

/*
Prefer not to use var 
because of the issue in block scope and functional scope
*/


console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
