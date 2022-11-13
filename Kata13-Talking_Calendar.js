//In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.
//We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.


//Creating a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
const talkingCalendar = function(date) { 
const splitDate = date.split("/"); // spliting the date into an array along the "/".
const year = splitDate[0]; // assigning the year to seperate variable. 
const mm = splitDate[1]; // assigning the month to seperate variable. 
const dd = splitDate[2]; // assigning the day to seperate variable. 
return month(mm) + ' ' + day(dd) + sub(date) + ' ' + year; // retuning final output by calling on helper functions. 
};



function sub(date) { // helper function to return ordinals for the days. If ends in 1 then st, 2 then nd, 3 then rd, otherwise th.
  if(date[6] === '1') {
    return 'st'
  } else if (date[6]=== '2') {
    return 'nd';
  } else if (date[6] === '3') {
    return 'rd'
  } else {
    return 'th';
  }
}

function day(dd) { // helper function to return only single digit for the day if it's 1-9 of the month.
  if(dd[0] === '0') {
    return dd[1] ;
  } else {
    return dd;
  }
}

function month(mm) { // helper function to return name of the month based on the numerical month.
  if(mm === '01') { return 'January';
  } else if (mm === '02') {return 'February';
  } else if (mm === '03') {return 'March';
  } else if (mm === '04') {return 'April';
  } else if (mm === '05') {return 'May';
  } else if (mm === '06') {return 'June';
  } else if (mm === '07') {return 'July';
  } else if (mm === '08') {return 'August';
  } else if (mm === '09') {return 'September'
  } else if (mm === '10') {return 'October';
  } else if (mm === '11') {return 'November';
  } else if (mm === '12') {return 'December';
  }
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*
Output
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/
