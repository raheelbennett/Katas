//In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.

const urlEncode = function(text) { //Creating a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20.
let strArray = text.split(""); // Splitting the sting into an array.
let j; // Declaring variable for later use to store starting index of string.
let k; // Declaring variable for later use to store ending index of string.
for (j = 0; j <strArray.length ; j++) { // Finding starting limit of string.
  if(strArray[j] !== " ") {
    break; // Using break so that it stops the loop at the first occurance of any non-space.
  } 
 } 
 for (k = strArray.length -1; k < strArray.length ; k--) { // Finding end limit of string. 
  if(strArray[k] !== " ") {
    break; // Using break so that it stops the loop at the last occurance of any non-space.
  } 
 } 
 for(i = strArray.length - 1 ; i >= 0; i--) { // for loop to go over each element of the strArray array.
    if(strArray[i] === " " && i > k) { // Removing any spaces after end of the string. 
      strArray.splice(i, 1);
    } else if(strArray[i] === " " && i >= j && i <= k) { // Replacing any spaces inside the string with %20
      strArray.splice(i, 1, "%20");
    } else if(strArray[i] === " " && i < j) { // Removing any spaces before beginning  of the string. 
      strArray.splice(i, 1);
    }
  } return strArray.join("");  // Returning the resulting array joined as string.
};



console.log(urlEncode("Lighthouse Labs")); // Printing the value returned to the function when passing text as string. 
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


/*
Expected Output
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/

