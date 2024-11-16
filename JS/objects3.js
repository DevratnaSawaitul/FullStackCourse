let a =10;
let b=a;
b=20;

console.log(a);
console.log(b);

let a_obj={value:10}
// shallow copy original effected a changes to 20 instead of 10
let b_obj=a_obj
b_obj.value=20

// deep copy original no effect
let c_obj={...a_obj}
c_obj.value=30
console.log(a_obj);
console.log(b_obj);
console.log(c_obj);


