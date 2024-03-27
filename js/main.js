// var, let, const
/*
var x = 1;
var x = 2;

console.log(x);
//////////////////////////
let x = 1;
let x = 2;

console.log(x);

let x = 1;
x = 2;

console.log(x);
///////////////////////////
const x = 1;
x = 2;

console.log(x);

const x = 1;

console.log(x);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// global scope!!
/*
var x = 1;
let y = 2;
//const z = 3;

// local scope!!
{
    let y = 4;
    
}
// local scope!!
function myFunc() {
    const z = 5;
    console.log(z);
}
myFunc()
*/
//////////////////////////////////////////////////////////////////////
//global scope!!
var x = 4;
let y = 5; // function scoped   
const z = 6; // block scoped

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc () {
    var x = 10;
    const z = 15;
   { 
    var x = 20; // function scoped****
    const z = 25; // block scoped****
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
   }
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}
myFunc();
///////////////////////////////////////////////////////////////////////////////////////////




































