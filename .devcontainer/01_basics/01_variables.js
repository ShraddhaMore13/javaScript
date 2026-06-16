const accountId=144553            
let accountEmail="shr.gmail.com"
var accountPassword="12345"
accountCity="Bangalore"
let accountState  // undefined

// accountId=2   // not allowed because accountId is a constant

accountEmail="hc@g.com"
accountPassword="2345"
accountCity="Delhi"
/* Never use var because it has block and function scope */

console.log(accountId)
console.table({accountEmail, accountPassword, accountCity});
console.table([accountEmail, accountPassword, accountCity]);
console.log(accountState)


