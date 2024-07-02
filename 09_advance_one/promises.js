// NOTE:- Promises object hai, Ise asynchronous task milta hai to woh promises btata hai ki complete hua hai ya nhi hua hai. [HISTORY] - promises pehle bhi use hote the mtlb usi tarah ki functionality use hoti thi jise hum blubird framework ke through use kr skte the. Pr ab ye function native hi daal diya hai.

//  Promises-1 ke bhi do part hote hai ek create krna aur ek consume krna
// Creating promises - ye callback function leta hai, aur iske do parameter hote hai resolve, reject.
const promiseOne = new Promise((resolve, reject) => {
  // Can do any asyn task here like:-
  // DB calls, DB inject, DB inject, cryptography related, network calls etc.
  setTimeout(() => {
    // console.log("Async task is Completed")
    resolve(); /*isko likhne se resolve aur then method cnnect hogae h. */
  }, 2000);
});
// Above Creating Promise ko use krna / Consume krna.
// Note:- .then ka sidha connection resolve ke saath hai
promiseOne.then(() => {
  // console.log("Promise Consumed")
});

// Accha Promise-2 ko zaruri ni hai kisi variable mai hold krwana, ek aur way promise create aur consume krne ka.
new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Async task 2 is completed")
    resolve();
  }, 1000);
}).then(() => {
  // console.log("Async 2 is Resolved")
});

// Promise-3,  network se koi data arha hoga, to woh data pass krna hoga aur uske upr lagana hoga resolve, reject. Network se data aaega resolve mai,     fir .then mai usko ek parameter mai le lenge.
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Aditya Dashore", email: "aditya.ad@gmail.com" });
  }, 1000);
});
promiseThree.then((user) => {
  // console.log(user)
  // console.log(user.name)
});

// Promise-4 - file access hogai to kuch bolenge, nahi hui(mtlb error h)to kuch.
const promiseFour = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    resolve({ username: "Raja", password: "123" });
  } else {
    reject("ERROR Something went wrong");
  }
}, 1000);
// promiseFour.then().catch() - error aaega to catch, finally - jb catch complete hoga tb
promiseFour
  .then((user) => {
    // console.log(user);
    return user.username;
  })
  .then((newusername) => {
    // console.log(newusername);
  })
  .catch((error) => {
    // console.log(error);
  })
  .finally(() => {
    // console.log("The promise is either rejected or resolved");
  });

//   Promise-5 -
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "456" });
    } else {
      reject("JAVASCRIPT: went wrong");
    }
  }, 1000);
});
// promiseFive.then() iske alawa ek aur tarikaa h, solve krte hai promisses ko
async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response)
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

 
