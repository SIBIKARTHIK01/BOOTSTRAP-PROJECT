// Creating a Object 3 Types
// First type
var obj1 = {
    name: "Nandha",
    Age: 20
}
console.log("date type:", typeof (obj1));
console.log("before adding place & area", obj1);
obj1.place = "Madurai";
obj1.area = "Anna Nagar";
console.log("after adding place & area", obj1);
console.log("obj1 place values:", obj1["place"]);

// second types
var obj = new Object();
obj.name = "sri";
obj.age = 20;
obj.gender = "male";
console.log("before delete", obj);
delete obj["age"];
console.log("after delete", obj);

// Third type object creating using constructor
// the constructor method is a special method of a class for creating and initializing an object instance of that class
var obj3 = new cons1();
function cons1() {
    this.fname = "kumar",
        this.age = 20,
        this.area = "anna nagar"
}
cons1();
console.log("obj3", obj3);

console.log(Object.keys(obj3));
console.log(Object.values(obj3));



var emp = {
    fname: "Nandha",
    lname: "kumar",
    Id: 57,
    Age: 21,
    dob: "21/12/2003",
    gender: "male",

    display: function () {
        alert("emp fname is " + this.fname)
    }
}
emp.lname = "kumaran"
console.log(emp);

emp = { ...emp, qualification: "Degree" }
console.log(emp)
console.log(emp.lname + " " + emp.fname);
console.log(emp["fname"] + " " + emp["lname"]);

var user = {}
user.name = "nandha"
user.age = 20
console.log(user);

var per = new Object();
per.name = "sri";
per.age = 20;
per.gender = "male";
console.log(per);

const na = {
    firstname: "nandha",
    lastname: "kumar",
    mark: {
        sscl: 600,
        hsc: 650,
        degree: {
            ug: 80,
            pg: 85
        }
    },
    fullname: function () {
        return this.firstname + "" + this.lastname
    }
}
console.log(na.firstname);
console.log(na.mark.degree.pg);
console.log(na.fullname());