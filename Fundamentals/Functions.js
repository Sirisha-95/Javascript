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


//functions return other functions
const mainFn = function (param1) {
    return function (param2) {
        console.log(`${param1}, ${param2}`);
    }
}

const mainCall = mainFn('param1');
mainCall('param2');

mainFn('param1')('param2');


//call and apply methods in JS to explicity define the this keyword in the function
// both call & apply methods are same, except apply takes array as second argument.

const apple = {
    fruit: 'apples',
    color: 'red',
    cost: '20',
    calPrice: function (quantity) {
        return console.log(`${this.color} ${this.fruit} cost ${quantity * this.cost} `);
    }
}

const price = apple.calPrice;

const mango = {
    fruit: 'mangoes',
    color: 'yellow',
    cost: '30'
}

const orange = {
    fruit: 'oranges',
    color: 'orange',
    cost: '40'
}

//using call method to pass the this object to be used in the function
price.call(mango, 5);

//using apply
const count = [10];
price.apply(orange, count);

//In modern JS apply method is not used instead call is used with spread operator as follows
price.call(apple, ...count);



//bind method
const bind1 = price.bind(orange);
bind1(5);
const bind2 = price.bind(mango, 20);//partial application as the parameters are pre defined
bind2();

//using bind basically returns a new function



//used for partial application
const addTax = (rate, value) => { return value + value * rate; }
const addVAT = addTax.bind(null, 0.23); //here a new function is returned because of bind function

console.log(addVAT(100));

//used on event listeners
document.querySelector('.buy').addEventListener('click', addTax);

//Equivalent function for using bind
const addVAT1 = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}
const addVAT2 = addVAT1(0.23);
console.log(addVAT2(100));
