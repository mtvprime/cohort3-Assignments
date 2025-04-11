// Create variables to store names, age, and nationality
let name = "Victor";
let age = 30;
let nationality = "NIgerian";

// Combine them into a sentence that introduces a person
let introduction = `Hello, my name is ${name}, I am ${age} years old, and I am ${nationality}.`;
console.log(introduction);

// Make a variable with your favorite quote or lyric
let favoriteQuote =
  "You made a way; when my back was against the wall, and it looked as if it was over.";

// Change a text to uppercase
let uppercaseQuote = favoriteQuote.toUpperCase();
console.log(uppercaseQuote);

// Change a text to lowercase
let lowercaseQuote = favoriteQuote.toLowerCase();
console.log(lowercaseQuote);

// Take a word and rearrange it in reverse order
let word = "hello";
let reversedWord = word.split("").reverse().join("");
console.log(reversedWord);

// Store the price of 3 items in 3 different variables
let price1 = 100;
let price2 = 200;
let price3 = 500;

// Calculate the total and display it with a message
let totalPrice = price1 + price2 + price3;
console.log(`The total price is: $${totalPrice}`);

// scores of 5 tests
let score1 = 65;
let score2 = 70;
let score3 = 98;
let score4 = 92;
let score5 = 78;

// Calculate the average and display it with a message
let averageScore = (score1 + score2 + score3 + score4 + score5) / 5;
console.log(`The average score is: ${averageScore}`);

// Create an array of your 5 favorite foods
let favoriteFoods = [
  "Amala",
  "Bread",
  "Fried Rice",
  "Fried Yam & Egg",
  "Snacks",
];

// Display the first and last items in the array
console.log(`First food: ${favoriteFoods[0]}`);
console.log(`Last food: ${favoriteFoods[favoriteFoods.length - 1]}`);

// Add two more food items to the list: one at the beginning and one at the end
favoriteFoods.unshift("Garri");
favoriteFoods.push("Spaghetti");

// Display the new list
console.log(favoriteFoods);

// Create three arrays of 10 student names each
let jssOne = [
  "John",
  "Janet",
  "Tola",
  "Israel",
  "Charles",
  "David",
  "Daniel",
  "Frank",
  "George",
  "Hannah",
];
let jssTwo = [
  "Isaac",
  "Juliath",
  "Kevin",
  "Lily",
  "Matthew",
  "Nifemi",
  "Olivia",
  "Paul",
  "Queen",
  "Racheal",
];
let jssThree = [
  "Samuel",
  "Tessa",
  "Umo",
  "Victor",
  "lucy",
  "Kehinde",
  "Olabisi",
  "Olamide",
  "Femi",
  "Bola",
];

// Display the arrays
console.log(jssOne);
console.log(jssTwo);
console.log(jssThree);
