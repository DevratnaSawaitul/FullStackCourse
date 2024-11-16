function hello(){
    console.log("Hi there");
}

function hello(name){
    console.log("hello ",name);
}

function hello(){
    return "dev";
}
hello();
hello();
hello("dev");
let name=hello();
console.log(name);
let add= function(a,b){
    return a+b;
}
console.log(add(10,20));