// map se bnana hai jisme h aur hr num 100 add krna hai, ye ek callback hai, mtlb kuch return krega toh uski value ko bhi assign krna pdega, accha curly braces lgaaoge to return likhna zaruri hai, aur curly braces ni lgao le toh return ni likhna hai. 
const num = [1,2,3,4,5,6,7,8,9,10]
const newNum = num.map((val)=>val + 100)
console.log(newNum)

