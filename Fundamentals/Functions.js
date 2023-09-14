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

//high order functions - that offers high level of abstraction 

const lowFn1 = function (str) {
    return `//g ${str}`;
}

const lowFn2 = function (str) {
    return str.replace('o', '*');
}

//higher order function
const highOrderFn = function (str, fn) {
    return console.log(fn(str));
}

highOrderFn('Welcome to fn1', lowFn1);
highOrderFn('welcome to fn2', lowFn2);

//JS vital concept - callback functions that offers high and low levels of abstraction
const clickedAction = function () {
    return console.log('clicked!');
}

document.body.addEventListener('click', clickedAction);

// callback function used in arrays
['element1', 'element2', 'element3'].forEach(clickedAction);
