//In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

//Input 
const sumLargestNumbers = function(data) {  // Creating a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
  let x = 0; // Creating an intial variable to use for highest value
  let y; // Declaring a blank variable to later use to store second highest value.
  for(i = 0; i < data.length ; i++) { // for loop to inspect each element of the array.
    if(data[i] > x) { // Comparing each iteration to the previous to find the highest value.
      y = x; // Storing value of the second highest.
      x = data[i] // Updating x to the higest value.
  }
 } return x + y; // Returning sum of the 2 largest numbers in the array back to the function.
};

console.log(sumLargestNumbers([1, 10])); // Prinitng output to the function using array of numbers.
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


/*Expected Output
11
5
126
*/