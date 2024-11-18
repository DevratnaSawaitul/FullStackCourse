//scope 
for (let i = 0; i < 1; i++) {
    let a = 10
    const b = 11;
    var c = 12;
}
// console.log("let",a)
// console.log("const",b)
// console.log("var ",c)

// Reassignment
let a1 = 10  //allow
var b1 = 11  //allow
const c1 = 12   //not allowed

// Redeclaration 
var x = 10
var x = 20
// let x1 = 11;
// let x1 = 21; // not allow
// const x2 = 13;
// const x2 = 14; // not allow

for (let j = 0; j < 5; j++) {
    console.log(j);
}
//console.log(j);// give error

for (var j1 = 0; j1 < 5; j1++) {
    console.log(j1);
}
console.log(j1);// allow


// arrow function
function sum(a,b){
    return a+b;
}
//better
let sum1=(a,b)=>{return a+b}

// if single statement return and brace can be avoided
let sum2=(a,b)=>a+b;