const accountId = 14415
let accountEmail = "hhisk@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// accountId = 2 // not allowed 
accountEmail = "ad@ad.com"
accountPassword = "212122121"
accountCity = "Bengaluru"
let accountState;
console.log(accountId);

/*
ek variable 4 line type bhi declare ho skta hai pr ye galat h
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

/* accountstate undefined value show krega agr variable declare krke initialize ni kiya to */
