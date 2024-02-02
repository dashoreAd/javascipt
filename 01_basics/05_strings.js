const name = "Aditya "
const repoCount = 50
// console.log(name + repoCount + " Value");
// above wala not good and also outdated

// String Literals/InterPolation
// console.log(`Hello my name is ${name} and my age is ${repoCount}`);


const gameName = new String('Aditya-Dashore')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);
// Adit

const anotherString = gameName.slice(-1, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
// console.log(newStringOne.length);
// console.log(newStringOne.trim().length);

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));