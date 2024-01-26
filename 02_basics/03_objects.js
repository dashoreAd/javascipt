// objects declare krne ke do tarke hai - literals, Constructor
// Singleton - koi bhi constructor se jb object bnta hai to woh 
// sigleton object hota h.
// literals se jb bhi object bnega to woh singleton ni hoga

// Object.create -> ye constructor se object bnega
// Object Literals
// Symbol datatype ko declare and initialize krna hai 
const mySum = Symbol("key1")
const JsUser ={
    name:"Aditya",
    "full name": "aditya dashore",
    [mySum]:"mykey1",
    age: 18,
    location:"Raipur",
    email:"dashore.ad@gmail.com",
    isLoggeIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["full name"])
// bracket notation
// console.log(JsUser.mySum)
// string dega
// console.log(JsUser[mySum])
// mykey1

// agr email chnge krna ho to 
// JsUser.email = "aditya.dashore@chatgpt.com"
// console.log(JsUser.email);
// console.log(JsUser);

// hum chaahte ki koi bhi humaara email ya kuch aur chnge ni kr pae - usko freeze krdo
// Object.freeze(JsUser)
JsUser.email = "aditya.dashore@google.com"
// console.log(JsUser.email);
// aditya.dashore@chatgpt.com -> ye change ni hpga kuki freeze hogya h

// Functions
JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting );
// upr waale mai function execute ni hua sirf function ka refernce aaya hai
console.log(JsUser.greeting())
console.log(JsUser.greeting2())


