// for of

//["","",""]

//[{},{},{}]

const numbers= [1,2,3,4,5]

for (const num of numbers) {
    // console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps   //unique values

const map = new Map() // only prints once every property // maps for unique values only
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
map.set('IN','India')

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);  // this doesnt work in 
// }