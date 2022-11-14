//In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.
//Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.


const calculateChange = function(total, cash) {
  let change = cash - total; // Calculating the total change that needs to be returned. 
  let output = {}; // Blank object to later ammend but adding properties and values of the denominations of change.
    while(change > 0) { // while loop to run until all of the change is accounted for. 
        if(change/2000 >= 1) { // condition to check if change is equal to or larger than $20.
        output.twentyDollar = Math.floor(change/2000); // calculating how many times $20 can fit in the value of change and adding this to the object. 
        change -= 2000*(Math.floor(change/2000)); // substracting the 20s from the total change
      } else if (change/1000 >= 1) {
        output.tenDollar = Math.floor(change/1000);
        change -= 1000*(Math.floor(change/1000));
      }  else if (change/500 >= 1) {
        output.fiveDollar = Math.floor(change/500);
        change -= 500*(Math.floor(change/500));
      }  else if (change/200 >= 1) {
        output.twoDollar = Math.floor(change/200);
        change -= 200*(Math.floor(change/200));
      }  else if (change/100 >= 1) {
        output.oneDollar = Math.floor(change/100);
        change -= 100*(Math.floor(change/100));
      }  else if (change/25 >= 1) {
        output.quarter = Math.floor(change/25);
        change -= 25*(Math.floor(change/25));
      }  else if (change/10 >= 1) {
        output.dime = Math.floor(change/10);
        change -= 10*(Math.floor(change/10));
      }  else if (change/5 >= 1) {
        output.nickel = Math.floor(change/5);
        change -= 5*(Math.floor(change/5));
      }  else { // Whatever is remaining will be accounted in pennies 
        output.penny = change;
        change = 0; // Once all the pennies are accounted for the change will be 0 and this will stop the while loop.
      }  
    } return output; //returning final Object. 
  };
  

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/*
Expected Output
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/


/*
another way to do this . 

 calculate: function(change) {
      while (change >= 2000)  {
        defaultObject.twentyDollar += 1;
        change -= 2000;
      }
      while (change >= 1000)  {
        defaultObject.tenDollar += 1;
        change -= 1000;
      }
      while(change >= 500)  {
        defaultObject.fiveDollar += 1;
        change -= 500;
      }
      while (change >= 200) {
        defaultObject.twoDollar += 1;
        change -= 200;
      }
      while (change >= 100) {
        defaultObject.oneDollar += 1;
        change -= 100;
      }
      while (change >= 25)  {
        defaultObject.quarter += 1;
        change -= 25;
      }
      while (change >= 10)  {
        defaultObject.dime += 1;
        change -= 10;
      }
      while (change >= 5) {
        defaultObject.nickel += 1;
        change -= 5;
      }
      while (change >= 1) {
        defaultObject.penny += 1;
        change -= 1;
      }

      */