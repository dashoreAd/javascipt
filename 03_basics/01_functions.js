// ye function ka definition hai
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }
// sayMyName :-  ye function ka reference hai
// sayMyName() :- ye function ka execution

// function addTwoNumbers(number1, number2){
// console.log(number1 + number2);
// }
// addTwoNumbers(9,8)

// function addTwoNumbers(number1, number2){
//      let result = number1 + number2
//      return result

//     return number1 + number2
// }
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        // console.log("PLease enter a username"); 
        return
    }
    return `${username} just logged in`
}
// (!username) - isse hum check krre hai ki user ne koi value daali hai ki nahi, agr no username hai to woh us loop mai chle jaaega aur return krdega, aur agr username h to woh niche waale rfeturn mai chle jaeega.
// function loginUserMessage(username = "sam"){ --- sam lika hai mtlb default value sam h agr koi value return ni hogi to  sam aajaega, isse fir username waali line likhne se koi mtlb ni h.
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))
 

// ********** NEXT LECTURE *******


function calculateCartPrice( ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))
// [ 200, 400, 500, 2000 ]
// rest opeartor(...num1) bhi bolte hai- ye hum jb use krte hai jb situation aise ho like ki ki user ne ek ke baad ek item cart item mai add krte jara hai, to usko ab kaise variable mai daale to hum isko push se bhi kr skte hai, pr ye rest operator waala better hai.
function CartPrice(val1,val2, ...num1){
    return num1
}
// console.log(CartPrice(200, 400, 500, 2000)) 
 
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));