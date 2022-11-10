//For this challenge we will implement a function called checkAir(), which will check a collection of air samples. The function will take in two arguments. The first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. The second argument is a number representing the highest acceptable amount of dirty samples.
//Our function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.

const checkAir = function (samples, threshold) { // Creating a function to return return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.
  let x = 0 ; // Declaring a variable to could the number of dirty samples, initializing at 0. 
  for(sample of samples) { // for of loop to iterate through each sample. 
    if ( sample === 'dirty') { // Condition to see if sample is dity. 
      x++;  // Counting all the dirty samples. 
    }
  } if ( (x/samples.length) < threshold) { // Calculating the fraction of dirty samples over total number of samples and returning Clean if below threshold.
    return "Clean"
  } else { // Otherwise returning Polluted. 
    return "Polluted"
  }
};

console.log(checkAir( // Testing output usign array of samples and value of threshold. 
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))


/*
Expected Output
Polluted
Polluted
Clean
*/