const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}
// myObject.map((iteration)=>{
//     console.log(iteration);
// })  ye wrong method hai
// Isko for in loop se bna skte hai 
// for(const key in myObject)
// {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }
// o/p is cpp shortcut is for C++

const programming = ["js","ruby","py","java","cpp"]
for (const key in programming) {
 console.log(programming[key]);
}