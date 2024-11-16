let arr = [1, 2, 3, 4]
console.log(arr)
let arr2 = [1, '2', "Str", true];
console.log(arr2);


for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

let a2 = arr2.forEach(function fun(element, index) { console.log("I got called", element * 2, index); return element * 2 });
let a3 = arr2.map(function fun(element, index) { console.log("I got called", element * 2, index); return element * 2 });

console.log("arr", a2);
console.log("map", a3);
let ar = [1, 2, 3, 4, 5, 6, 7, 8]
let a1 = ar.filter((element, index) => {
    return element % 2 == 0;
});
console.log(a1);
console.log(ar);

let red = ar.reduce((acc, element) => {
    return acc += element;
});
console.log(red);