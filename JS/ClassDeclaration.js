//declaration
class Person {
    name
    constructor(name) {
        this.name = name;
    }
}

// to call
const p = new Person('Dev');
console.log(p.name);


//or using expression
const p2 = class {
    name
    constructor(name) {
        this.name = name;
    }
}
console.log(p2.name = "Suj");


// In heritance
class Teacher extends Person {
    constructor(name) {
        super(name);
    }
}
const p3 = new Teacher("Teacherrr");
console.log(p3.name);