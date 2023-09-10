// 'var' hoisting example

if(!numberProducts) deleteShoppingCart();  // It prints 'All products are deleted' because here the numberProducts variable is undefined (its considered as false) hence calls the deleteShoppingCart function
var numberProducts =10;

function deleteShoppingCart(){
  console.log('All products are deleted');
}

var x=1;
let y=2;
const z=3;

console.log(x == window.x); // o/p - true
console.log(y == window.y);//o/p - false

