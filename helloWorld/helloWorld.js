//console.log('Hello, World!');

// console.log(123456);

//console.error('I am a fake error')

//variable inside a javascript
// const, let, or var
// use let to name a variable that can be changed

/* const name = "Angel Juarez";
* console.log(name)
*
* const color = "blue"
* console.log(color) */

// const name-something KEBAB CASING
// const nameSomthing CAMEL CASING
// const NameSomethingElse PASCAL CASING
// const name_something SNAKE CASING

//const name_something = 121 + 121;
//let something = 'another'

//console.log(name_something /* here is a comment inside of the console log */);
//console.log('something'); // this is another comment


//const name = "angel";
//name = "Jose";

//const arr = [1, 2];
//arr[0] = 3000;
// arr = 'something else';
//console.log(arr[0]);


//let name; // reserved the name in the context === declaring it
//name = 'angel'; // giving it a value === initializing it

// const anotherName; // SyntaxError: Missing initializer in const declaration
// let anotherName; // will results blank


//const arr = [];
//console.log (typeof arr);
// results OBJECT

// TYPES OF DATA TYPE METHODS: (google js string methods, or js array methods)
// string --> .split();
// number --> Math.floor(); Math.ceil();
// array
// object

//const number = 12.3;
//console.log(Math.ceil(number));




// WEEK 1 DAY 4
// morningLab

// Find avg of ( 4, 10, 22, -30, 55 )
avg = (4 + 10 + 22 + -30 + 55) / 5;
// Print in console
console.log("average of 4, 10, 22, -30, 55 is " + avg);
// Find avg of ( 68, 7, -22, 9, 100 )
avg2 = (68 + 7 + -22 + 9 + 100) /5;
// Print in console
console.log("average of 68, 7, -22, 9, 100 is " + avg2);


// exercise
const hello = "Hello, "
const myName = "Nicole"
const name2 = "Angel"
const name3 = "Teresa"
const name4 = "Lawrence"

console.log(hello + myName + "!");
console.log(hello + name2 + "!");
console.log(hello + name3 + "!");
console.log(hello + name4 + "!");

// input any name
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Hi, what is your name?', name => {
    console.log(`Hello, ${name}!`);
    readline.close();
  });

