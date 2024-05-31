// forEach callback function leta hai

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach(val=>console.log(val))
// Upr waale dono same hai, tarika alaga alag hai


// Accha forEach loop ke paas aur bhi parameter hote hai like (item, index, arraylist) - jo bhi chaahiye hoga usko aap as a parameter pass krdoge tio value dedega.
// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })
// coding.forEach((val,index,arr)=>{console.log(val,"-",index,"-",arr)})
// o/p:-
// js - 0 - [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby - 1 - [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// forEach array ke andr OBJECT pe lagana hai
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    
    // console.log(item);
    // console.log(item.languageFileName);
} )

const teams = ["Ind","Aus","SA","Pak"]
//  const equal = teams.forEach(val=>console.log(val))
//  console.log(equal)
//  o/p:- undefined - kuki foreach kuch value return ni krta toh uski value khi pr hold ni kra skte h.

// filter:- ye value return bhi krta hai, To return krta hai to kahi hold bhi krwana pdega,ye callback function hai, aur isme loop ke saath hum condition bhi de skte hai like,
const myNums =['1','2','3','4','5']
const newNums = myNums.filter((val)=>
    // {return val>3})
(val>3))

console.log(newNums)
// agr condition galat hui to empty arry bhej dega []
// agr maanlo aapne filter mai curly braces use kie to return likhna zruri hai, aur agr simple bracket usee kiye to fir retun likhna zaruri ni h.

// agr upwaale ko foreach se bnaae to

const num = ["11","22","33","44","55"]
const newNum = []
num.forEach((val)=>{
    if(val>22){
        newNum.push(val)
    }
})
console.log(newNum)
// o/p:- [ '33', '44', '55' ]



