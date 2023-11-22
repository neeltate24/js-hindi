const tinderUser1 = new Object() // singleton object
const tinderUser = {} // non singleton object 
console.log(tinderUser); // {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regularUser = {
    email:"some@mgail.com",
    fullname: {
        userfullname: {
            firstname: "Neel",
            lastname: "Tate"
        }
    }
}

console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);

const obj3 = Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    }
]

console.log(users[0].email) // h@gmail.com

console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) //[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor //Hitesh

const {courseInstructor: instructor} = course
console.log(instructor);


//random user api-> https://randomuser.me/api/


