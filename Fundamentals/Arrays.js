
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
Create an array called bills containing all 10 test bill values.
Create empty arrays for the tips and the totals (tips and totals)
Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills=[ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips=[];
const totals = [];
let tip;
for(let i=0; i<bills.length; i++){
    const tip= calcTip(bills[i]); // creating a new tip variable everytime we loop it
    tips.push(tip);
    totals.push(tip+bills[i]);
}
console.log(tips);
console.log(totals);


//array methods

//slice method
const arr1 = ['x', 'y', 'z', 'a', 'b'];

console.log(arr1.slice(2, 4)); //includes the index 2 and excludes index 4 (4-2 =2 elements - o/p - z,a
console.log(arr1.slice(-1)); //o/p- b
console.log(arr1.slice(1, -2));// starts at index 1 and excludes last 2 elements - o/p- y,z

//splice method
const arr2 = ['app', 'ball', 'cat'];

console.log(arr2.splice(1)); //o/p- ['bat','cat'] //mutates the array
console.log(arr2); //o/p- ['app']

//reverse
console.log(arr2.reverse()); //mutates the array

//concat -doesnt mutate arrays
console.log(arr1.concat(arr2));

//at method - also works for strings
console.log(arr1.at(-1)); //get last element of array

//Loop over arrays using 'of' or 'forEach' method 
arr1.forEach(function (elem, index, array) {
  console.log(elem, index, array);
});
