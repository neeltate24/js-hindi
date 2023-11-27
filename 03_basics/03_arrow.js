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

chai()



