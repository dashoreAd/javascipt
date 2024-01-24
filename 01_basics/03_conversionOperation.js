let score = "33abc"
console.log(typeof score);
console.log(typeof (score));

let valueIntNumber = Number(score)
console.log(typeof valueIntNumber);
console.log(valueIntNumber);


// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn= 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// "" => false
// "aditya" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);