//We need to complete a function called chooseRecipe(), which will receive three parameters: - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

const ingredientCheckA = function (bakeryA, recipes) { // function to find a match of ingerdients between bakeryA and recipes.
let match = []; // creating an empty array to store all the matched recipies. 
  for (x of bakeryA) { // looping through each element of bakeryA. 
    for (i=0; i < recipes.length; i++) { // outer loop for each object in the recipes array. 
      for(j=0; j < recipes[i].ingredients.length; j++) { //inner loop for the ingredients array.
        if(x === recipes[i].ingredients[j]) { //looking for a match between bakeryA and ingredients. 
          match.push(recipes[i].name); // Any match will be added to the array. 
        }
      }
    }
  } return match; // Returning array of matches for bakeryA and recipies. 
};

const ingredientCheckB = function (bakeryB, recipes) { // function to find a match of ingerdients between bakeryB and recipes.
let match = [];
  for (x of bakeryB) {
    for (i=0; i < recipes.length; i++) {
      for(j=0; j < recipes[i].ingredients.length; j++) {
        if(x === recipes[i].ingredients[j]) {
          match.push(recipes[i].name);
        }
      }
    }
  } return match;
};


const chooseRecipe = function(bakeryA, bakeryB, recipes) { // function to find a any common recipies between both bakeries.
  for(a of ingredientCheckA(bakeryA, recipes)) { //for of loop to go through each element the array returned to ingredientCheckA function. 
    for(b of ingredientCheckB(bakeryB, recipes)) { //for of loop to go through each element the array returned to ingredientCheckB function.
      if(a === b) { // if a match is found it will be returned to the main function. Problem said there will always be a single correct answer so returning the first match found.  
        return a;
      }
    }
  }
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];


console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));


/*
Expected Output

Persian Cheesecake
Nima's Famous Dijon Raisins
*/


/* Tai's sample that i received after I completed mine. 

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let bakeryAPossible = [];
  let bakeryBPossible = [];
  let possibleRecipes = '';
  for(let i = 0; i < bakeryA.length; i++) {
    for(let j = 0; j < recipes.length; j++) {
      for(let k = 0; k < recipes[j]["ingredients"].length; k++) {
        if(bakeryA[i] === recipes[j]["ingredients"][k]) {
          bakeryAPossible.push(recipes[j]["name"]);
        }
      }
    }
  }
  for(let i = 0; i < bakeryB.length; i++) {
    for(let j = 0; j < recipes.length; j++) {
      for(let k = 0; k < recipes[j]["ingredients"].length; k++) {
        if(bakeryB[i] === recipes[j]["ingredients"][k]) {
          bakeryBPossible.push(recipes[j]["name"]);
        }
      }
    }
  }
  for (let l = 0; l < bakeryAPossible.length; l++) {
    for (let m = 0; m < bakeryBPossible.length; m++) {
      if(bakeryAPossible[l] === bakeryBPossible[m]) {
        possibleRecipes += bakeryAPossible[l];
      }
    }
  }
  return(possibleRecipes);
}*/