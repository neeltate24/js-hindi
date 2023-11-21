// Primitive Data Type

// types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let Obj = {
    name:"hitesh",
    age:"22"
}

const myFunction = function() {
    console.log("Hello World!");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp); //null typeof object
console.log(typeof heros);
console.log(typeof Obj);
console.log(typeof myFunction);
console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) //copy changes only copy, Heap (Non-Primitive) reference changes both values

let myYoutubename = "neeltatedotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "neel@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);