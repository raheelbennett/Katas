//In this exercise, we will be converting a normal string into camelCase text.
//We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.


const camelCase = function(input) { //Creating a function named camelCase that will convert a string to camel case, and return the result.
 let string = ""; // Creating a variable to store the final output in. 
  for(i = 0; i < input.length; i++) { // Looping over each element of the string. 
    if (input[i] === " ") { //If a space is detected we will, skip the space, instead upper case the next element, add it to our final output and skip the loop for the element that we already accounted for. 
      string += input[i+1].toUpperCase ();
      i++ ;
    } else {
      string += input[i]; // If no space detected then the element will be added as is. 
    }
  } return string; // returning final output. 
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


/*
Output
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/
