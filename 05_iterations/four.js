const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject){
        // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map() // only prints once every property // maps for unique values only
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
map.set('IN','India')

// for (const key in map) {
//     console.log(key);         // cannot print anything in map, iteration doesnt happen in maps
// }

