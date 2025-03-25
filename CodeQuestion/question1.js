// Question 1 
//Write a function that will take a array from an user and check if everything is a number.
// If yes update the array by multiplying it’s value by twice every 5 seconds.
// And clear the interval after 20 seconds.
// If not, tell the user how many incorrect inputs were there.

Solution:
let ar = [];
let flag = true;
do {
    console.log(ar);
    let user = prompt("enter value, else write exit to stop: ");
    if (user == 'exit') {
        flag = false;
        console.log("thank you for entries! ");
    } else {
        ar.push(user);
    }
} while (flag);
let count = 0;
console.log(ar, " is original array");
let ar2 = ar;
const timeJob = setInterval(() => {
    count += 5;
    for (let a = 0; a < ar.length; a++) {
        if (!isNaN(Number(ar[a]))) {
            ar[a] = ar[a] * 2;
        }
    }
    console.log(ar, " is array after ", count, " delay");
    if (count === 20) {
        clearInterval(timeJob);
        let wrongVals = "";
        for (let a = 0; a < ar.length; a++) {
            if (isNaN(Number(ar[a]))) {
                if (wrongVals === "") {
                    wrongVals = ar[a];
                } else {
                    wrongVals = wrongVals + ", " + ar[a];
                }
            }
        }
        if (wrongVals != "") {
            console.log(wrongVals, " are not an number");
        }
    }
}, 5000);

/*output:
[]
enter value, else write exit to stop: 1
[ '1' ]
enter value, else write exit to stop: 2
[ '1', '2' ]
enter value, else write exit to stop: 3
[ '1', '2', '3' ]
enter value, else write exit to stop: a
[ '1', '2', '3', 'a' ]
enter value, else write exit to stop: b
[ '1', '2', '3', 'a', 'b' ]
enter value, else write exit to stop: exit
thank you for entries! 
[ '1', '2', '3', 'a', 'b' ]  is original array
[ 2, 4, 6, 'a', 'b' ]  is array after  5  delay
[ 4, 8, 12, 'a', 'b' ]  is array after  10  delay
[ 8, 16, 24, 'a', 'b' ]  is array after  15  delay
[ 16, 32, 48, 'a', 'b' ]  is array after  20  delay
a, b  are not an number
*/


// Question 2 
// Write a function to take a name from user (fname, sname,age, …) and pass all this info to a function with a function to convert the info to an object and log the object.

let fname = prompt("Enter Name: ");
let sname = prompt("Enter surname: ");
let age = prompt("Enter age: ");

class Person {
    fname
    sname
    age
    constructor(fname, sname, age) {
        this.fname = fname;
        this.sname = sname;
        this.age = Number(age);
    }
}

let personObj = new Person(fname, sname, age);
console.log(personObj);

/* output: Enter Name: Dev
Enter surname: Sawaitul
Enter age: 25
Person { fname: 'Dev', sname: 'Sawaitul', age: 25 }*/