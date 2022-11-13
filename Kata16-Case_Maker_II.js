//We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

const makeCase = function(input, cases) { //Creating a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options.
  let casesArr = []; //Creating a variable to hold a blank array. This will be used to add any case parameter that is not in an array.
  if(typeof cases === 'string') { // Checking if any case parameter is a string and if so it will be added to an array. 
  casesArr.push(cases);
  cases = casesArr; // All cases will now be in an array.
  }
/*
Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

1.camel, pascal, snake, kebab, title
2.vowel, consonant
3.upper, lower
Our function should be able to handle all of these cases.

Using for loops for each precedence order in sequence.
*/
  for(i=0; i < cases.length; i++){ // Looping through each element of the cases array to alter the input string according to the case type
    if(cases[i] === "camel") { // Calling on each case types helper function. 
    input = camelCase(input);
    } else if (cases[i] === "pascal") {
    input = pascalCase(input);
    } else if (cases[i] === "snake") {
    input = snakeCase(input);
    } else if (cases[i] === "kebab") {
      input = kebabCase(input);
    } else if (cases[i] === "title") {
      input = titleCase(input);
    } 
  }  
  for(i=0; i < cases.length; i++) { 
    if (cases[i] === "vowel") {
    input = vowelCase(input);
    } else if (cases[i] === "consonant") {
    input = consonantCase(input);
    }   
  } 
  for(i=0; i < cases.length; i++) { 
    if (cases[i] === "upper") {
    input = input.toUpperCase();
    } else if (cases[i] === "lower") {
    input = input.toLowerCase();
    }
  } return input;
};


const camelCase = function(input) { //Creating a function named camelCase that will convert a string to camel case, and return the result.
  let string = ""; // Creating a variable to store the final input in. 
   for(i = 0; i < input.length; i++) { // Looping over each element of the string. 
     if (input[i] === " ") { //If a space is detected we will, skip the space, instead upper case the next element, add it to our final input and skip the loop for the element that we already accounted for. 
       string += input[i+1].toUpperCase();
       i++ ;
     } else {
       string += input[i]; // If no space detected then the element will be added as is. 
     }
   } return string; // returning final input. 
 };

 const pascalCase = function(input) { //Creating a function named pascalCase that will convert a string to pascal case, and return the result.
  let string = ""; // Creating a variable to store the final input in. 
   for(i = 0; i < input.length; i++) { // Looping over each element of the string. 
     if (input[i] === " ") { 
       string += input[i+1].toUpperCase();
       i++ ;
     } else if (i === 0) {
      string += input[i].toUpperCase(); 
     } else {
       string += input[i]; 
     }
   } return string; // returning final input. 
 };

 const snakeCase = function(input) { //Creating a function named snakeCase that will convert a string to snake case, and return the result.
  let string = ""; // Creating a variable to store the final input in. 
   for(i = 0; i < input.length; i++) { // Looping over each element of the string. 
     if (input[i] === " ") { 
       string += "_" ;
    } else {
       string += input[i]; 
     }
   } return string; // returning final input. 
 };

 const kebabCase = function(input) { //Creating a function named kebabCase that will convert a string to kebab case, and return the result.
  let string = ""; // Creating a variable to store the final input in. 
   for(i = 0; i < input.length; i++) { // Looping over each element of the string. 
     if (input[i] === " ") { 
       string += "-" ;
    } else {
       string += input[i]; 
     }
   } return string; // returning final input. 
 };

 const titleCase = function(input) { //Creating a function named titleCase that will convert a string to title case, and return the result.
  let string = ""; // Creating a variable to store the final input in. 
   for(i = 0; i < input.length; i++) { // Looping over each element of the string. 
     if (input[i-1] === " ") { 
       string += input[i].toUpperCase();
     } else if (i === 0) {
      string += input[i].toUpperCase(); 
     } else {
       string += input[i]; 
     }
   } return string; // returning final input. 
 };

 const vowelCase = function(input) { //Creating a function named vowelCase that will convert a string to vowel case, and return the result.
  let string = ""; // Creating a variable to store the final input in. 
   for(i = 0; i < input.length; i++) { // Looping over each element of the string. 
     if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") { 
       string += input[i].toUpperCase();
     } else {
       string += input[i]; 
     }
   } return string; // returning final input. 
 };

 const consonantCase = function(input) { //Creating a function named consonantCase that will convert a string to consonant case, and return the result.
  let string = ""; // Creating a variable to store the final input in. 
   for(i = 0; i < input.length; i++) { // Looping over each element of the string. 
     if (input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u") { 
       string += input[i].toUpperCase();
     } else {
       string += input[i]; 
     }
   } return string; // returning final input. 
 };
 console.log(makeCase("this is a string", "camel"));
 console.log(makeCase("this is a string", "pascal"));
 console.log(makeCase("this is a string", "snake"));
 console.log(makeCase("this is a string", "kebab"));
 console.log(makeCase("this is a string", "title"));
 console.log(makeCase("this is a string", "vowel"));
 console.log(makeCase("this is a string", "consonant"));
 console.log(makeCase("this is a string", ["upper", "snake"]));


/*
Expected Output
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/