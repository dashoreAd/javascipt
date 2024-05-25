// array
// type declaration of arrays line-3,4,5
 const myArr = [0,1,2,"Raja"]
// const myHeros = ["Shaktiman", "Naagraj", "spiderMan"]
// const myArr2 = new Array(0,1,2,3,4,5,6,"Raja")
// console.log(myArr);

// array methods
// myArr.push(3)
// console.log(myArr);
// [ 0, 1, 2, 'Raja', 3 ] -> value add hoti hai last se

// myArr.pop()
// console.log(myArr);
// [ 0, 1, 2, 'Raja' ] -> last se value delte hoti hai

// myArr.unshift(9)
// console.log(myArr);
// [ 9, 0, 1, 2, 'Raja' ] ->start se add hoga, pr ye thoda slow push se kuki iske liye sabhi elements ko ek place piche krna pdega aur fir ye aaega. lekin client bole to krna pdega.

// myArr.shift(9)
// console.log(myArr);
// [ 0, 1, 2, 'Raja' ]-> ye shuru wala ddelte krega

// console.log(myArr.includes(9));
// false -> mtlb 9 ni hai array mai
// console.log(typeof(myArr.includes(9)));
// iski value return hogi boolean mai.

// console.log(myArr.indexOf(3));
// -1 -> ye puchra h 3 hai ki ni, ni hai to -1 return krega aur hai to woh jis index pe hai uski value dedega. 

const newArr = myArr.join()

// console.log(myArr);
// // [ 0, 1, 2, 'Raja' ]
// console.log(newArr);
// // 0,1,2,Raja -> join ne string mai convert krdiya

// slice ->copy bnti hai , splice -> direct reference hota h
// console.log("A ->", myArr);
// A -> [ 0, 1, 2, 'Raja' ]

const myn1 = myArr.slice(1,3) 
// console.log(myn1);
// [ 1, 2 ]

// console.log("B ->",myArr);
// B -> [ 0, 1, 2, 'Raja' ]

//splice -> ye reference mtlb org array chng hoga 
const myn2 = myArr.splice(1,3)
// console.log("C ->",myn2);
// C -> [ 1, 2, 'Raja' ]

// console.log(myArr);
// [ 0 ]


