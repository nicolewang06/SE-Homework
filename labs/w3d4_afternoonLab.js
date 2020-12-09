// Create an Animal class. 
// The class will have name, age, color, legs, superPower attributes
// Create two objects of this class - both with a unique superPower
// create three methods for this class - include one method named userSuperPower()
// Create two objects for this class
// Create a class name User
// This class with have firstName, lastName, department attributes 
// a method name changeDepartment()
// Create three instances of this class
// Change department for two of the instances
// Create three objects for this class


// Create an Animal class. 
// The class will have name, age, color, legs, superPower attributes
// Create two objects of this class - both with a unique superPower
// create three methods for this class - include one method named userSuperPower()
// Create two objects for this class

class Animal {
    constructor (name, age, color, legs, superPower) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.superPower = superPower;
    }
    userSuperPower () {
        console.log("my super power");
    }
    eat () {
        console.log("i am eating");
    }
    barking () {
        console.log("hear me bark");
    }
};

const dog = new Animal ("Spot", 2, "white", 4, "speed");
const koala = new Animal ("Blu", 1, "grey", 2, "flying");

console.log(koala.superPower);




// Create a class name User
// This class with have firstName, lastName, department attributes 
// a method name changeDepartment()
// Create three instances of this class
// Change department for two of the instances
// Create three objects for this class

class User {
    constructor (firstName, lastName, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }
    changeDepartment () {
        console.log("change department");
    }
};

const person = new User ("John", "Doe", "HR");
const personTwo = new User ("Jane", "Doe", "Finance");
const personThree = new User ("Mary", "Jane", "Sales");

person.changeDepartment();
console.log(person.department);