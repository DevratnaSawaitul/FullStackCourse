let fun = {
    "name": "Dev",
    "phone": "12345",
    say_name: () => {
        console.log("Hi my name is devratna");
    },
    say_phone_and_name: () => {
        console.log("Hi my name is Dev and phone is 23456");
    }
}

// using constructor
let fun2 = new Object({
    "name": "Suj",
    "phone": "123458",
    say_name: () => {
        console.log("Hi my name is sujata");
    },
    say_phone_and_name: () => {
        console.log("Hi my name is sujata and phone is 1234");
    }
});
fun.email='1234567';
delete fun.name;
console.log(fun);
console.log(fun2);