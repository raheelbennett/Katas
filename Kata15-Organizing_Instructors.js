//In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.
/*Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:
{
  CourseName: [instructors]
} 
*/

const organizeInstructors = function(instructors) { // main function that will use helper function and create an object categorizing all instructors based on their course. 
let finalObj = {}; // empty function for later use to return final object.
let courses = getCourses(instructors); // assigning the array from our helper function to a variable for ease of use.
  for(i = 0; i < courses.length; i++) { // looping through each element (course) of the array returned by our helper function. 
    let arr = []; // created an empty array inside the loop that will temporarily store the list of all instructors that match the indexed course and it will reset for the next loop (course).
    for(j = 0; j < instructors.length; j++) { // innder loop to compare each course in courses array with each course inside the instructors object. 
      if(courses[i] === instructors[j].course) { // when a match is found the corresponding instructor names in the array will be added to the temporary array (arr).
        arr.push(instructors[j].name); 
      }
    } finalObj[courses[i]] = arr; // the temp array will now be pushed to the final object, as a value to the key. They key will be the course name the outer loop is running. This is still being done inside the outer loop so each course can be added to the object along with its values array.
  } return finalObj; //returning final object to the main function. 
};



let getCourses =function (instructors) { //this helper fucntion return array of courses after removing any duplicates found.
let arr1 = []; //blank array inside helper array for later use to store courses. 
  for (i = 0; i < instructors.length; i++) { //outer loop to use each course to compare to remaining courses in the object.
    let x = 0; // will use this variable as a flag for when a match is found.
    for(j = i+1; j < instructors.length; j++) { //inner loop to cycle through the remaining courses in the object, hence the starting point is i+1.
      if(instructors[i].course === instructors[j].course) { //if a duplicate is found our flag x will change value.
        x = 1;
      } 
    } if(x === 0) { //if variable x is not flagged then we will proceed with adding the course name to the array.
        arr1.push(instructors[i].course) ;
    }
  } return arr1; // returning final array of each course in the object to the heler function.
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/*
Expected Output
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/




/* Another way to get array of courses after removing duplicates:

function getCourses(instructors) {  
let arr1= [];
  for(instructor of instructors) { //this fucntion return array of courses after removing any duplicates found.
    arr1.push(instructor.course);
  } for(i = 0; i < arr1.length; i++) {
     for(j = i+1; j < arr1.length; j++) {
      if(arr1[i] === arr1[j]) {
        arr1.splice(i, 1);
      }
    }
  } return arr1;
}*/