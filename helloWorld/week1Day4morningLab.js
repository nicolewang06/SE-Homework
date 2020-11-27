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

