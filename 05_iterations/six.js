// map se bnana hai jisme h aur hr num 100 add krna hai, ye ek callback hai, mtlb kuch return krega toh uski value ko bhi assign krna pdega, accha curly braces lgaaoge to return likhna zaruri hai, aur curly braces ni lgao le toh return ni likhna hai. 
const num = [1,2,3,4,5,6,7,8,9,10]
const newNum = num.map((val)=>val + 100)
// console.log(newNum)

// New Example of filter:-
const books = [
    { title: "Book One", genre: "Fiction", publish: "1661", edition: "2001 "},
    { title: "Book Two", genre: "Non-Fiction", publish: "1662", edition: "2002"},
    { title: "Book three", genre: "Romantic", publish: "1663", edition: "2003"},
    { title: "Book Four", genre: "History", publish: "1664", edition: "2004 "},
    { title: "Book Five", genre: "Horror", publish: "1665", edition: "2005 "},
    { title: "Book Six", genre: "Fiction", publish: "1666", edition: "2006 "},
    { title: "Book Seven", genre: "NOn-Fiction", publish: "1667", edition: "2007"},
    { title: "Book Eight", genre: "Romantic", publish: "1668", edition: "2008"},
    { title: "Book Nine", genre: "History", publish: "1669", edition: "2009 "},
    { title: "Book Ten", genre: "Horror", publish: "1670", edition: "2010 "}     
]
// const userBooks = books.filter((bk)=>bk.genre== "Romantic") 
// const userBooks = books.filter((bk)=> bk.title==="Book Nine" )
const userBooks = books.filter((bk)=> bk.publish>1665)

// console.log(userBooks)

// Chaining means ek ke upr hi do filter ya do map ya ek filter ek map
let num1 = [1,2,3,4,5,6,7,8,9,10]
let newNum1 = num1.map((val1)=>val1*10)
                  .map((val1)=>val1 + 1)
                  .filter((val1)=>val1>30)
// console.log(newNum1)
// mtlb isme bhot saare chaining kr skte hai, aur hr chaining ke baad jo value val1 ki hogi woh next mai pass hojaaegi.

// reduce :- isme mai callback hai, isme accumulator hota hai jo ki value leta hai inintial value, fir current value mai jo array mai value hai woh jaati hai hai like,red uce generally shopping cart banane mai use hota hai.
const num2 =[1,2,3,4,5,6,7,8,9,10]
const totalNum = num2.reduce((acc,cur)=>acc + cur,10 )
    // console.log(`acc: ${acc} ; cur: ${cur} `)
// console.log(totalNum)

const cart = [
    {
        courses: "html course",
        price: 499
    },
    {
        courses: "css course",
        price: 899
    },
    {
        courses: "js course",
        price: 1099
    },
    {
        courses: "react course",
        price: 1299
    },
    {
        courses: "node course",
        price: 1499
    },
    {
        courses: "MERN stack course",
        price: 2999
    },
]
const ShoppingCart = cart.reduce((acc,item)=>acc + item.price,0) 
console.log(ShoppingCart)
