// OOP - Inheritance 
//
// 1. Create a class called Fish 
//      1. Define a method Swim( )
// 2. Create a class Nemo that inherits from Fish
//      1. Define an attribute color
// 3. Create a Nemo object. Can it swim? 
//
// 2. Find the difference between abstract class and an interface
// 3. Which of the two can have implementation of a method in the class?



// 1. Create a class called Fish 
//      1. Define a method Swim( )
// 2. Create a class Nemo that inherits from Fish
//      1. Define an attribute color
// 3. Create a Nemo object. Can it swim? 

class Fish
{
    swim() { console.log("I'm swimming !"); }
};
class Nemo extends Fish
{
    constructor (color) { super(color); }
};

const nemo = new Fish ("orange");

nemo.swim();


// 2. Find the difference between abstract class and an interface
//      Abstract does not have a constructor
//      Abstract can have multiple inheritance
//      Abstract has a body
//      Abstract can have concrete and abstract method
//      Interface can be public or private/non static/non final
//      Interface has constructor
//      Interface can only extend to a single class.


// 3. Which of the two can have implementation of a method in the class?
//      Abstract