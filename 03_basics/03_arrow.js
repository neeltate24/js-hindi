const user = {
    username: "neel",
    price: 199,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this)
//     console.log(this.username) // this doesnt work in function
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     // console.log(this);
//     console.log(this.username);
// }

const chai = () => {
    let username = "hitesh"
    console.log(this);
    // console.log(this.username);
}

// chai()

// const addTwo = (num1,num2) => {   //curly bases use return
//     return num1 + num2;
// }

// const addTwo = (num1,num2) => num1 + num2;

// const addTwo = (num1,num2) => (num1 + num2) // round brackets you can write like this

const addTwo = (num1,num2) => ({username:"hitesh"})

console.log(addTwo(3,4));

// const myArray = [2,5,3,7,8]

// myArray.forEach()   



