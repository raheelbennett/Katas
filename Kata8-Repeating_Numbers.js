//The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. The first will be the value to repeat, the second will be the amount of times to repeat that value.

 
//Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.

const repeatNumbers = function(data) {
  let result= "" ; // Creating variable with initial condition of string so that values can be added to it as a string later on. 
  for(x of data) { // This will loop over each element of the outter array.
    if (result !== "") { // This will add a comma after each inner loop is completed, ONLY IF, there is another element in the outer array. Varible result won't be empty after the first loop so it make a good conditional.
      result += ", ";
    } for(i=0; i < x[1]; i++) { // Nested loop to repeat the first value as string, times the second. 
      result += x[0];
    } 
  } return result;
};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*
Expected Output
1111111111
11, 222
10101010, 343434343434, 9292
*/