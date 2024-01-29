// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

const greetings = "hello world";
for ( const greet of greetings)
{
    // console.log(`Each character is ${greet}`);
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)
//OUTPUT:- Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

// Loop ke liye map ko use krna
//   for (const key of map)
//  console.log(key);
// OUTPUT :- [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ] -> o/p ket value pair mai aaega

// agr humko isi value ko destructure krna hai to:-
// for (const [key, value] of map)
// console.log(key, ":-", value);
// IN :- India
// USA :- United States of America
// Fr :- France

// object pe for of loop lagana  ]

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
//  for (const object of myObject)
//  {
//     console.log(object);
//  }
// isse iterate ni hoga
//  iske contniuation mai hi hai four.js