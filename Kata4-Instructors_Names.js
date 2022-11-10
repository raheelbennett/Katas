//In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

const instructorWithLongestName = function(instructors) { //Creating a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name.
 let x = 0; // Declaring a variable with starting value as 0 to use to compare lengths of each name.
 let y; // Declaring a variable to use later to store the array index that registered the higest length.
  for(i = 0; i < instructors.length; i++) { // for loop to iterate over each element of the array.
    if (instructors[i]["name"].length > x) { // if condition to compare length of previous longest name to the next iteration. Using "greater than" operator so if there are two instructors with the longest name, return the first one.
      x = instructors[i]["name"].length;  // Updating value of x with the length of the longest name to compare next iteration.
      y = i; // Updating value of y to the index that registered the longest name.
    }
  } return instructors[y]; // Returning the element corresponding to y, which is the index of the longest name. 
 };

console.log(instructorWithLongestName([ // Print the value returned to the function by passing the array as parameters to the instructors argument.
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

/*
Expected Output
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}
*/