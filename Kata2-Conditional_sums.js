//For this kata, we'll be adding only the numbers in the array which match the given condition.

const conditionalSum = function(values, condition) { //Creating a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even.
  x = 0; // If no values match the condition, return 0, otherwise x will be used to add up values that match the condition.
  for(value of values) { // for of loop to iterate through each element of the array.
    if (condition === "even") { // if condition to check if condition(paramter) is "even".
      if (value % 2 === 0) { // Nested if condition to check if value in array is even.
        x += value; // Values that pass the condition will be added to variable x. 
      }
    } else if (condition === "odd") { // if condition to check if condition(paramter) is "odd".
      if (value % 2 !== 0) { // Nested if condition to check if value in array is odd.
        x += value; //Values that pass the condition will be added to variable x. 
      }
    }
  } return x; //Returning value of x to the function.
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // Output to print the function given the values and condition parameters.
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

/* Expected Output
6
9
144
0
*/