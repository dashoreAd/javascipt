const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}
// ek scope ke andar agr variable use krna h, current context ko refer krna hai to hum this keyword use krte h 
user.username = "sam"
user.welcomeMessage()
// ye call hoga jb chlega user ke andar wala
user.username = "sam"

// user.welcomeMessage()
// {   username: 'sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage] 
// }
// console.log(this);
// {} -> kuki global scope mai kuch bhi ni hai, mtlb agr alag se scope ke bahar use kroge tb empty object bhejega, pr agar aap isko browser ke console mai krte ho to ye window object bhejte hai jisme bhot saare methode hote hai like alert, clearTimeInterval etc.  


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()
// undefined
// function ke andar this use kroge to undefined show hoga

const chai = function () {
    let username = "hitesh"
    // console.log(this.username);
}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ({username: "Aditya"})
// console.log(addTwo(3, 4))
//  agr object return krna ho toh parenthese zaruri lgana pdega ({username: "Aditya"})

const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()