//singleton
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "fullname": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email); //hitesh@gmail.com
console.log(JsUser["email"]); //hitesh@gmail.com
console.log(JsUser["fullname"]); //Hitesh Choudhary
console.log(JsUser[mySym]); //mykey1

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
