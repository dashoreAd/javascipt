// js mai month 0 se start hoti h, apne mann se ek date 1 jan 1970 yha se time  start hota hai calculate krne ka->
let myDate = new Date()
console.log(myDate);
// 2024-01-26T04:26:23.053 Z -> isko pdh ni skte

// console.log(myDate.toString());
// Thu Jan 25 2024 18:50:33 GMT+0000

// console.log(myDate.toDateString()); 
// Thu Jan 25 2024

// console.log(myDate.toLocaleString());
// 1/26/2024, 4:29:04 AM -> aapko normal date format mai dega

// console.log(typeof  myDate);
// Object

// agr aapko kuch date create krni hai to niche waala hai
// let myCreatedDate = new Date(2023, 0 ,23)
// console.log(myCreatedDate)
// 2023-01-23T00:00:00.000Z -> ab isko string mai daalo

// console.log(myCreatedDate.toDateString())
// Mon Jan 23 2023

//  let myCreatedDate2 = new Date(2023, 0, 23, 5, 3 )
// console.log(myCreatedDate2.toLocaleString())
// 1/23/2023, 5:03:00 AM -> -> aapko normal date format mai dega

// let myCreatedDate3 = new Date("01-26-2023")
// console.log(myCreatedDate3.toLocaleDateString())
// 1/26/2023

let myCreatedDate3 = new Date("01-26-2023")
// console.log(myCreatedDate3.toLocaleString())
// 1/26/2023, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// 1706244162763 -> ye milliseonds mai 1 jan 1970 se count hai
// console.log(myCreatedDate3.getTime());
// 1674691200000 -> isse hum do date ko compare kr skte h

console.log(Date.now());
// 1706244484747 -> ye millisec mai hai, ye abhi ki date dega
// agr uprwale millisec ko sec mai krna hai to
console.log(Math.floor(Date.now()/1000))
// 1706244484

let newDate = new Date()
// console.log(newDate);
// 2024-01-26T04:52:08.084Z

// console.log(newDate.toDateString());
// Fri Jan 26 2024

// console.log(newDate.toLocaleString());
// 1/26/2024, 4:52:08 AM

//  console.log(newDate.getMonth() + 1);
// 0 -> month mai +1 isliyue kiya hai kuki by default month 0(jan) to isko +1 dene se user ko confusion na ho isliye 

// console.log(newDate.getDay());
// 5 

newDate.toLocaleString('default',{
 weekday: "long"
})
// ye jo upr mai hai woh locale string method ko apne hisaab se aur customize kr skte hai

