// Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
    // Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers(first, second) {
    if (first > second){
        console.log(first + " is the largest num")
    }else console.log(second + " is the largest num");
}
maxOfTwoNumbers(15,5);

/* // ANGEL'S ONE LINER CODE
function highestOfTwo(a, b) {
    return a > b ? a : b;
  }
  function highestOfThree(a, b, c) {
    return highestOfTwo(a, b) > c ? highestOfTwo(a, b) : c;
  } */




// Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1, num2, num3) {
   // let max = Math.max(num1, num2, num3);
    console.log(Math.max(num1, num2, num3) + " is the largest of the 3 numbers");
}
maxOfThree(10, 20, 30);


// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
function isCharacterAVowel(char) {
    //const check = "a, e, i , o , u";
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        console.log("true");
    }else console.log("false");
}
isCharacterAVowel("a");


// Write a function charCount that takes a string and returns the length of the string.
function charCount(charCount) {
    // let length = charCount.length;
    // console.log(length);
    console.log("charCount is " + charCount.length);
}
charCount("nicole");

// Write a function vowelCount that
    // takes a String and returns the number of vowels in the String.
        // add a check for the string to be of 10 or less characters
/* function vowelCount(string) {
   // let string = "";
    const vowels = "a, e, i, o, u";
    //if string contains vowels than return # of vowels in string */
function vowelCount(string) {
    let vowelAmount = 0;
    let vowels = "aeiou";
    for(let i = 0; i < vowels.length; i++) {
        for(let j = 0; j < string.length; j++) {
            if(string[j] === vowels[i]) {
                vowelAmount ++;
            }
        }
    }
    if(string.length > 10) {
        console.log(`${string} is more than 10 characters!`);
    }
    console.log(vowelAmount + " vowels");
    return vowelAmount;
}
vowelCount("hello");