let student1 = {
    "name": "dev",
    "marks": 123
}
let student2 = {
    "name": "suj",
    "marks": 234
}
function Student(name, marks) {
    this.name = name
    this.marks = marks
}
function stuFactoryFun(name, marks) {
    return {
        name, marks
    }
}
let student3 = new Student("ram", 123);
let student4 = stuFactoryFun("cha", 567);

for (let i in student1) {
    console.log(i);
}

let dummy = [
    { name: "dev", roll: 123, mark: 30 },
    { name: "suj", roll: 124, mark: 50 },
    { name: "yuv", roll: 125, mark: 90 },
    { name: "aks", roll: 126, mark: 40 },
    { name: "rah", roll: 127, mark: 80 }
]

let temp = dummy.filter((student) => { return student.mark < 60 });
let temp1 = temp.map((element) => { return parseInt(element.mark) + 10; });
let avg = temp1.reduce((element, total) => { return total += element });
console.log(dummy)
console.log(temp1)
console.log("Average above 60 with grace below 60 of 10 marks is: ", avg / temp1.length)


let obj={name:'123',sur:'234'}
let obj1= JSON.stringify(obj)
console.log(obj1)
console.log(JSON.parse(obj1))