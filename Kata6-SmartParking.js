//We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.

const whereCanIPark = function (spots, vehicle) { // Creating whereCanIPark() function that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot
  let x; //Declaring x for later use of column index.
  let y; //Declaring y for later use for row index.
  for (let i = 0 ; i < spots.length ; i++) { // for loop to iterate through the rows.
    for (let j = 0 ; j < spots[i].length ; j++) { // Nested for loop to interate through the columns. 
      if (vehicle === 'motorcycle' && (spots[i][j] === 'R' || spots[i][j] === 'S' || spots[i][j] === 'M')) { // Condition to check for spots for motorcycle vehicles.
        x = j;
        y = i;
        break;     
      } else if(vehicle === 'small' && (spots[i][j] === 'R' || spots[i][j] === 'S')) { // Condition to check for spots for small vehicles.
        x = j;
        y = i;
        break;      
      } else if (vehicle === 'regular' && spots[i][j] === 'R') { // Condition to check for spots for regular vehicles.
        x = j; // Assigning x the value of column index.
        y = i; // Assigning y the value of row index. 
       break;
      }
    } if (x != undefined) { //A break statement for the outer loop after a parking space has been found.
      break;
    }
  } if ((x || y) === undefined) { // Returning false if no parking spots founds.
    return false;
  } else return [x,y]; // Returning x and y a parking spot found. 
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'R', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));


/*
Expected Output
[4, 0]
false
[3, 1]
*/



/*
const whereCanIPark = function (spots, vehicle) {
//I need a nested FOR loop in order to iterate through an array of arrays
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
//creating a variable to hold the value of [x][y] so it can be called later in the if statement
      const availableSpot = spots[y][x];
// Now I need to write some if statements for each instance of vehichle type
     if (vehicle === "regular" && availableSpot === "R")  {
        return [x,y];
      } else if (vehicle === "small" && (availableSpot === "R" || availableSpot === "S")) {
        return [x,y];
      } else if (vehicle === "motorcycle" && (availableSpot === "R" || availableSpot === "S" || availableSpot === "M")) {
        return [x,y];
      }
    }
  }
  
  return false

};
*/