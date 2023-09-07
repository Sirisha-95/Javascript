/* Difference between function declarations and function expressions */

function calAge(year){
  return year -1995;
}

const myAge = calAge(2023); //the function declaration and definition can be interchanged.


// Function Expression - anonymous function name

const calAge1= function(year){
  return year-1995;
}

const myAge1= calAge1(2023); // the constant calAge1 to be defined before in order to return the value
