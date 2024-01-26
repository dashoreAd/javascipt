const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);
// flash

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// ['thor','Ironman','spiderman',[ 'superman', 'flash', 'batman' ],'superman','flash','batman']

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);
// ['thor','Ironman','spiderman','superman','flash','batman']

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(1) 
// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ] -> 1 mai 1 deep hoga

// // const real_another_array2 = another_array.flat(2) 
// console.log(real_another_array2);
// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5  ] -> 2 mai 2 deep tk hoga

//  const real_another_array3 = another_array.flat(Infinity)
// console.log(real_another_array3);
// [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

// console.log(Array.isArray("Aditya"));
// false -> kuki ye to string thi
// console.log(Array.from("Aditya"));
// [ 'A', 'd', 'i', 't', 'y', 'a' ] -> isse ye array bn gya
// console.log(typeof (Array.from("Aditya")));
// object
// console.log(Array.isArray(Array.from("Aditya")));
// true

let score1 = 100
let score2 = 200
let score3 = 300
// sb elements ko array mai daaldega
console.log(Array.of(score1, score2, score3));
// [ 100, 200, 300 ]
