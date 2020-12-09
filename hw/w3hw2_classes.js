// OOP: Classes
//
// Let's create shaped objects
//
// 1. Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
//      1. Write a function called circle_area that returns the area of the object. 
//      2. Write a function total_sides that returns the number of sides of the object.
// 2. Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
//      1. Write a function called rectangle_area that returns the area of the given object.
//      2. Write a function total_sides that returns the number of sides of the object.
// 3. Define a new class called Square with appropriate attributes and instantiate a few Square objects.
//      1. Write a function called square_area that returns the area of the given object.
//      2. Write a function total_sides that returns the number of sides of the object.


// 1. Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
//      1. Write a function called circle_area that returns the area of the object. 
//      2. Write a function total_sides that returns the number of sides of the object.

class Circle {
    constructor(radius, sides) {
        this.radius = radius;
        this.sides = sides;
    }
    circle_area() {
        let circleArea = Math.PI * this.radius * this.radius;
        console.log(`Circle area: ${circleArea.toFixed(2)}`);
    }
    total_sides() {
        console.log(`Circle total sides: ${this.sides}`);
    }
}
const smallCircle = new Circle(2, 0);
smallCircle.circle_area();
smallCircle.total_sides();

// 2. Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
//      1. Write a function called rectangle_area that returns the area of the given object.
//      2. Write a function total_sides that returns the number of sides of the object.

class Rectangle {
    constructor(height, width, sides) {
        this.height = height;
        this.width = width;
        this.sides = sides;
    }
    rectangle_area() {
        let rectangleArea = this.height * this. width;
        console.log(`Rectangle area: ${rectangleArea}`);
    }
    total_sides() {
        console.log(`Rectangle total sides: ${this.sides}`);
    }
}
const smallRectangle = new Rectangle(5, 2, 4);
smallRectangle.rectangle_area();
smallRectangle.total_sides();

// 3. Define a new class called Square with appropriate attributes and instantiate a few Square objects.
//      1. Write a function called square_area that returns the area of the given object.
//      2. Write a function total_sides that returns the number of sides of the object.

class Square {
    constructor(height, width, sides) {
        this.height = height;
        this.width = width;
        this.sides = sides;
    }
    square_area() {
        let squareArea = this.height * this. width;
        console.log(`Square area: ${squareArea}`);
    }
    total_sides() {
        console.log(`Square total sides: ${this.sides}`);
    }
}
const smallSquare = new Square(5, 5, 4);
smallSquare.square_area();
smallSquare.total_sides();