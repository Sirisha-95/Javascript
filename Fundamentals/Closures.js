//Closures  - happens automatically in certain situations not written manually
//Closure - Any function has access to the variable environment of the execution context in which the function was created
//Closure has priority over scope chain, firstly checks for the variable in closure
// called as closed over variables 

let f;
const g = function () {
  const a = 100;
  f = function () {
    console.log(a * 3);
  }
}
g();
f();
console.dir(f);

//example 2
let fn;
const printName = function () {
  const myName = 'Sirisha';
  fn = function () {
    console.log(`My name is ${myName}  in example 2`);
  }

}
printName();
setTimeout(fn, 5000);

//example 3

const printName1 = function (wait) { //these are arguments passed to this closure function are also local vars of the function
  const myName = 'Sirisha';
  setTimeout(function () {
    console.log(`My name is ${myName} is printed after ${wait} seconds `);
  }, wait * 1000);
  console.log('Start printing');
}
printName1(10);
