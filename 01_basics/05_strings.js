const name = "Aditya "
const repoCount = 50
// console.log(name + repoCount + " Value");
// above wala not good and also outdated

// String Literals/InterPolation
// console.log(`Hello my name is ${name} and my age is ${repoCount}`);


const gameName = new String('Aditya-Dashore')
// ye tarike se bhot saare prototype use kr skte hai.

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// {}
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// zeroth position se 4-1 tk chalega 
// console.log(newString);
// Adit

const anotherString = gameName.slice(1, 4)
// first position se 4-1 tk chalega 
// console.log(anotherString);

const newStringOne = "   hitesh    "
//  console.log(newStringOne.length);
//  total character dega 13
//  console.log(newStringOne.trim().length);
//  aage piche ke spaces ko cut krke dega 6


const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))
//  https://hitesh.com/hitesh-choudhary
// console.log(url.includes('sundar'))
//  false
// console.log(gameName.split('-'));
//  [ 'Aditya', 'Dashore' ]