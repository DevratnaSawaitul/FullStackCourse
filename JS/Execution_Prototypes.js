// Object 
let student1 = {
    'name': "Dev",
    'sur': "Sawa"
}
console.log(student1);

// Condtructor
function Student(name, sur) {
    this.name = name;
    this.sur = sur;
}

let student2 = new Student("suj", "saw");
console.log(student2.name, student2.sur);

// Factory Funtion
function stuFactory(name, sur) {
    return {
        name, sur
    }
}
// no need to use new keyword
let student3 = stuFactory('ram', 'saw');
console.log(student3);


// Explicit Binding:
let stud = {
    name: "dev",
    sur: "saw",
    printInfo: function () {
        console.log(this.name, this.sur);
    }
}
let teacher = {
    name: "ram",
    sur: "saw"
}

stud.printInfo.apply(teacher);
// here teacher used printInfo and will refer to his params even using .this
