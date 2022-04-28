// Global Scope
var a = 1;
let b = 2;
const c = 3;

// Function Scope
function test() {
    var a = 4; //var is a function scope declaration means you can have different variable of the same name inside and outside the function
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}

test();

if(true){
    //Block Scope: conditional statement or loop and anything is wrapped in curly braces
    var a = 7;
    let b = 8;
    const c = 9;
    console.log('Block Scope: ', a, b, c); 
}

for(let a = 0; a < 10; a++){  //change let to var and see what's different
    console.log(`loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);
