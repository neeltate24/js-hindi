let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33 

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ***************** Operations ****************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(-true);
console.log(+"");
console.log(-"");

let num1, num2, num3 

num1 = num2 = num3 = 2+2 //readability

let gameCounter = 100;
// gameCounter++;
++gameCounter; //prefix and postfix incremental operators

console.log(gameCounter);

//link to study
//https://262.ecma-international.org/13.0/#sec-abstract-operations








