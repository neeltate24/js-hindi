function sayMyName(){
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("L");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ //parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ //parameters
    // let result = number1 + number2
    // return result // after return no lines get print
    return number1 + number2
}

// addTwoNumbers(3,"4") //arguments

const result = addTwoNumbers(3,5)

console.log("Result :", result);

function loginUserMessage(username = "sam"){
    if(!username){  // !username = username===undefined
        console.log("please enter a username");
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("neel"));
console.log(loginUserMessage("neel"));





