// Immediately Invoked Function Expressions (IIFE) //to remove global scope pollution use iife // iife use ;

// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai()

(function chai(){    //named iife
    console.log(`DB CONNECTED`);
})();

((name)=>{   //unnamed iife means arrow function iife
    console.log(`DB CONNECTED ${name}`);   // () => {}
})("neel")   // equivalent to below function

function chai(name){
    console.log(`DB CONNECTED ${name}`);
}

chai("neel1")

