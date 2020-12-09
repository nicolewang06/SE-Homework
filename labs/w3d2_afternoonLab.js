// 1. Mr. Bonner (aka the Red Rocket, the Red Mamba) doesn't belong in this class of Hall Of Famers.\
// Remove this imposter immediately and assign it to a new variable named `notHof`
// Console.log this new variable as well as the original list.

var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];
notHof = (hof.pop());
//console.log("notHof: "+ notHof + "  hof: " + hof);



// 2. As head of McDonald's New Product Division, your job is to test and approve all new menu items.
// In the testMenu array below, all the items are approved except for "McLinguine" and "McChar-Siu Bau".
// Remove these items from the list and console.log the updated testMenu.

var testMenu = [
"McPizza Burger",
"McFly Burger",
"McLinguine",
"McChar-Siu Bau",
"McChop-Chae",
"McPancit"
];

testMenu.splice(2,2);
//console.log(testMenu);



// 3. Increase the peace! Your job is quash the bitter rivalry
// and unite both the westSide and eastSide rappers into a new array called `oneLove`. Console.log this new array.

var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];

oneLove = westSide.concat(eastSide);
//console.log(oneLove);


// 4. Some drama between you and the Kardashian's went down during last Saturday's potluck party.
// You are no longer on speaking terms and need to unfriend the following from your facebook:
// "Yeezy", "Kimmy K" and "Lamar Odom". Unfriend these ungrateful people and assign them to a new variable named `unFriend`. Console.log this new variable.

var fbFriends = [
"Khalid",
"Yeezy",
"Kimmy K",
"Lamar Odom",
"Lebron",
"Warren Buffet"
];

//unFriend = fbFriends.splice(1,3);
//console.log(unFriend);




//another solution using filter
let newFriends = fbFriends.filter(name => {
    if(name !== "Yeezy" && name !== "Kimmy K" && name !== "Lamar Odom") {
        return name;
    }
});
//console.log(fbFriends);



//another solution using switch, case
const unfriend = fbFriends.filter(name => {
    switch(name) {
      case "Yeezy":
        return false;
      case "Kimmy K":
        return false;
      case "Lamar Odom":
        return false;
      default:
        return true;
    }
  });
  console.log(unfriend);








//5.  create a user profile using map where following keys. 

user1 = {

    first_name: "nicole",
    
    last_name: "wang",
    
    company: "per scholas",
    
    department: "information technology",
    
    };
//    console.log(user1);

    
// 6. You are provided with an empty array called objToArray.
// Using a for... in loop, fill the array with all of the numbers from the checkObj object if they are greater than or equal to 2.

    const checkObj = {
        oddNum: 1,
        evenNum: 2,
        foundNum: 5,
        randomNum: 18
      };
      // ternary
      const objToArray = [];

    for(const property in checkObj) {
    checkObj[property] >=2 ? objToArray.push(checkObj[property]) : "";
    }
//    console.log(objToArray);

    //   const objToArray = [];
    //   for (let value in checkObj) {
    //     if (checkObj[value] >= 2) {
    //       objToArray.push(checkObj[value]);
    //     }
    //   }
    //   console.log(objToArray);

// 7. This time, use the Object.values() method to return an array of checkObj's values,
// and assign this array to a constant called objToArray.
// Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6.
// If so, reassign the value of divBy6 to true.

const checkObj2 = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let divBy6 = false;
const objToArray2 = Object.values(checkObj2);
objToArray2.forEach(value => {
  if (value%6 === 0) {
    divBy6 = true;
//    console.log(value + " is divisible by 6");
  }
})
// another solution with for loop
/* let divBy6 = false;
const objToArray = Object.values(checkObj);
for(let i = 0; i < objToArray.length; i++) {
  const number = objToArray[i];
  if(number % 6 === 0)
    divBy6 = true;
} */