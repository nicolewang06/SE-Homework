// WEEK 3 DAY 2 Morning Lab

// 1. What is an efficient way to create an array for first 50 integers?
let arrInt = [];
arrInt.length = 50;
for (let i = 1; i <= 50; i++) {
    arrInt[i] = i;
    console.log("1. " +i);
}

// 2.   You've been tasked to do this week's grocery shopping.
//      As you arrive at Times Supermarket, Kanye pings you to get a bottle of Hendricks gin.
//      Add this to the existing shoppingList and console.log it.
var shoppingList = [

    "cool ranch doritos",
  
    "kings hawaiian sweet bread",
  
    "peanut butter oreos",
  
    "fruit loops cereal"
  
  ];
  shoppingList.push('Hendricks gin');
  console.log("2. " +shoppingList);

  // 3.  Use the force, or in this case the reverse method
  // to help Yoda make some sense with his motivational talk to the young Jedi interns.

  var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
  console.log ("3. " +yoda.reverse());

  // 4. People been lining up for hours to get the newest iphone release.
  // Help manage the unruly crowd of privileged customers by serving them one at a time
  // and assiging it to a variable named `nowServing`.
  // Console.log this new variable as well as the waitList.

var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro"];
for(let i = 0; i < waitList.length; i++) {
    nowServing = waitList[i];
    console.log("4. Now Serving " + nowServing);
} 


// 5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string.
// Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

var shoe = ["just", "do", "it"];
shoeString = shoe.toString();
console.log("5. " +shoeString);