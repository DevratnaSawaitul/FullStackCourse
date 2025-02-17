// first way to create obj
let a = {
    name: "dev",
    printa: function () {
        console.log(this.name);
    }
}

a.sur = "saw";
console.log(a);

// second way in prototype
let b = Object.create(
    {
        name: "suj",
        printa: function () {
            console.log(this.name);
        }
    }
)

console.log(b);