//In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.

const numberOfVowels = function(data) { //Creating a function named numberOfVowels that will receive a string and return the number of vowels in that string.
  let y = 0; // Declaring a variable to keep count of the vowels, starting at 0 if none are found.
  for(x of data) { // Using for of loop to analyze the string. 
    if(x === "a" || x === "e" || x === "i" || x === "o" || x=== "u") { // if condition to check if string matches any of the vowels. 
      y++; // For every match adding 1 ot the counter. 
    }
  } return y; // Returning value of y which would be equal to the total number of vowels found. 
};

console.log(numberOfVowels("orange")); // Print command of function, passing the string for argument data.
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));


/*
Expected Output
3
5
5
*/