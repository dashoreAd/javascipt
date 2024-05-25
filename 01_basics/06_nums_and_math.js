const score = 400
// console.log(score);
// yhaa pr assume kragya hai
const balance = new Number(1000)
// console.log(balance);
// [Number: 1000] - specifically no. likha type milega
// console.log(balance.toString());
// 1000 - isse toString se ye string mai hogya, ab bhot sari propety aai
// console.log(balance.toString().length);
// 4 ye length btara h 1000 ki

// console.log(balance.toFixed(2));
// tofixed se woh decimal ke baad do zero tk value dega like 
// 1000.00
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));
// 124 - ye string return krta h
console.log(typeof(otherNumber.toPrecision(4)));
// Ye string hai ab return mai.
const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// 1,000,000 -> US standard ke hisaab se dega
// console.log(hundreds.toLocaleString('en-IN'));
// 10,00,000 -> Indian standard ke hisaab se dega

// console.log(Number.MAX_VALUE)
// Number.MAX_VALUE -> 1.79E+308.
// Number.MIN_VALUE ->  5.00E-324
 
// ************************* MATHS *****************************
// console.log(Math);
// console.log(Math.abs(-4));
// 4 -> absolute value negative waali value ko positive krdeta hai
// console.log(Math.round(4.7));
// 5 -> normal humlog jo round off krte hai woi
// console.log(Math.ceil(4.1));
// 5 -> agr 4 se thoda bhi zyada hua to 5 krdega
// console.log(Math.floor(4.8));
// 4 ->ye ceil ke opposite hai
// console.log(Math.min(4,8,9,3));
// for minimum value 3
// console.log(Math.max(4,8,9,3));
// for maximum value 9
// console.log(Math.random());
// 0.38059823444838226 - iski value hmesha 0 aur 1 ke bich mai
// console.log((Math.random()*10) + 1);
// console.log(Math.floor((Math.random()*10) + 1));
// 9 - ye floor se roundoff hoke aaegi value
 const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
 








