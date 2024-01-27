// Immediately Invoked Function Expressions (IIFE)
// hum chaahte ki jaise hi humara site load ho waise hi kuch data(database se connect hojae) load ho site pe.
// global scope ke pollutuion se problem hoti hai kai br. to us global scope ke variable declaration ko hatane ke liye iife ko use kiya.

(function chai(){
    // named IIFE -> kuki is iife naam h 'chai'
    console.log(`DB CONNECTED`);
})();
//semicolon lagana zaruri hai kuki iife invoke to hogya hai pr usko pta ni h kha rukna hai, isliye semicolon must h.
// iife ko parenthese mai cover krna pdta h lin5 & lin8
( (name) => {
    // ye simple iife h kuki iska naam ni h
    console.log(`DB CONNECTED TWO ${name}`);
} )('Aditya')