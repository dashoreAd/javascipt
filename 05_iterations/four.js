// Object ko loop krane ka ek tarika hai for in loop

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
} 

// Isko for in loop se bna skte hai 
// for(const key in myObject)
// {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }
// o/p:- cpp shortcut is for C++

const programming = ["js","ruby","py","java","cpp"]

// for (const key in programming) {
//   console.log(key);
// }
// o/p:- 0
//       1
//       2
//       3
//       4

for (const key in programming) {
    console.log(programming[key]);
   }
   
// o/p:- js
//       ruby
//       py
//       java
//       cpp