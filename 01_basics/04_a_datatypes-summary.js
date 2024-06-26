// Primitive
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);
// false

const bigNumber = 123456789987653n
// console.log(typeof bigNumber); -> bigInt


// Reference (Non primitive)
// Array, Objects, Functions
const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "Aditya",
    age: 24
}
const myFunction = function(){
    // console.log("Hello World");
}
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);
// console.log(typeof anotherId);

// ***********************************************************
 /*Stack (Primitive) -> isme ek copy milti hai, to agr ek dusri 
value change hogi to original waali ko farak ni pdega ;       
  Heap (Non-Primitive) ->isme reference milta hai mtlb original value milti h, agr ek change hogi to dusri value bhi chnge hogi */

let myYoutubename = "AdityaDashorefitness"
let anothername = myYoutubename
anothername = "coffee code"
// console.log(myYoutubename);
// console.log(anothername);
// ye upr waala stack memory ka example hai
let userOne = {
    email: "user1@gmail.com",
    upi:"user1@paytm"
}
let userTwo = userOne
userTwo.email = "dashore.ad@gamil.com"
// console.log(userOne.email);
// console.log(userTwo.email);
// ye heap memory ka example hai