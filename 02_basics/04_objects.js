// const tinderUser = new Object()
// iska bhi o/p -> {}, ye ek singleton hai
const tinderUser = {}
// iska bhi o/p -> {}, aur ye ek non singleton hai  
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
// { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname);
// { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
// console.log(regularUser.fullname.userfullname);
// { firstname: 'hitesh', lastname: 'choudhary' }
// console.log(regularUser.fullname.userfullname.firstname);
//  hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = { obj1, obj2}
// console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj4 = {5: "a", 6: "b"}
const obj5 = Object.assign({}, obj1, obj2, obj4)
// {} -> ye target hai aur iske baad wale source hai, mtlb ye target aur source return krta hai, isiloye pehle empty array bhejte hai to usse pta chlta hai ki pehla wala target hai aur dusra wala se sb source hai, output same aaega with{} aur w/o.
// console.log(obj5);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);
// { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));
// [ 'id', 'name', 'isLoggedIn' ] -> isse key pair ki key aaegi
 
//  console.log(Object.values(tinderUser));
//  [ '123abc', 'Sammy', false ] -> isse us key ki value aajaaegi

// console.log(Object.entries(tinderUser));
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//isme property puchte ha ki is loggedIn hai kya, agr loggedIn hogi-yes


// DESTRUCTURING
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]