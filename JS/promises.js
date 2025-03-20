function sayHi() {
    setTimeout(() => {
        console.log('This is delayed Hi, Two');
    }, 2000);
}
function loginUser(callback) {
    setTimeout(() => {
        console.log('In Login');
    }, 2000);
    callback("User: Dev");
}
function showUser(user) {
    console.log(`${user}`);
}

console.log('One');
sayHi();// this will skip and move to next line which will cause issue
//so we can use is callback funtion
loginUser(showUser);
console.log('Three');

// still now best Way use promises instead

function PromiseUseMethod() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({});
        }, 10000);
    });
}

let obj = PromiseUseMethod();
console.log('this is obj ', obj);

// 1st way using .then() and .catch()
loginUser(showUser).then(PromiseUseMethod);

// 2nd way to use await method where one execution end then other start
await(PromiseUseMethod);