/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (first, second) => {
    max = (first > second) ? console.log(first) : console.log(second);
  }
  maxOfTwoNumbers(10, 2);
  
 /*
2. Define a function  maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (num1, num2, num3) => {
    console.log(Math.max(num1, num2, num3) + " is the largest of 3 numbers");
}
maxOfThree(1,3,5);

/*
3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (char) => {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        console.log("true");
    }else console.log("false");
}
isCharacterAVowel("b");

/*
4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers.
For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
*/

sumArray = (n1, n2, n3, n4) => {
    console.log (n1 + n2 + n3 + n4);
}
sumArray(1,2,3,4) ;

multiplyArray = (n1, n2, n3, n4) => {
    console.log(n1 * n2 * n3 * n4);
}
multiplyArray(1,2,3,4);

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

function colors() {
    console.log(arguments.length + " arguments passed to function");
}
colors("blue", "pink", "yellow", "green");

/*
6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

// const reverseString = str => [...str].reverse().join('');
// console.log (reverseString("my name is NiCOLE"));
//console.log([3,2,1].reverse());

reverseString = (str) => {
    return str.split('').reverse().join('');
}  
console.log(reverseString("My name is Nicole"));


/*
7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
*/

findLongestWord = (str) => {
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
          maxLength = words[i].length;
          console.log("longest word has " + maxLength + " letters");
        }
      }
      return maxLength;
      
    }
findLongestWord("pinkish red blue yellow");

/*
8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
*/
filterLongWords = (arr, num) => {
    anArr = [];
    for (let a = 0; a < arr.length; a++) {
      if(arr[a].length > num){
        anArr.push(arr[a]);
      }
    }
    return anArr;
  }
