
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

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const copyDogsJulia = dogsJulia.slice(1, dogsJulia.length - 1);
  const dogs = copyDogsJulia.concat(dogsKate);
  dogs.forEach(function (value, index) {
    const type = value >= 3 ? 'dog' : 'puppy';
    console.log(`Dog ${index} is ${type}`);
  });

}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


//using map function to produce side effects
const profile1 = {
  owner: 'Alpa Beta'
}
const profile2 = {
  owner: 'Gamma Micron'
}

const profiles = [profile1, profile2];

const addUsername = function (profiles) {
  profiles.forEach(function (profile) {
    profile.username = profile.owner.toLowerCase().split(' ').map((elem) => elem[0]).join('');
  })
}
addUsername(profiles);
console.log(profiles);


//filter method
const amounts = [200, -399, 3434, -343434, 3500];
const positiveAmnts = amounts.filter((elem) => elem > 0);
console.log(positiveAmnts);

//reduce method - callback function is different from map & filter , first parameter is accumulator, current element, index, array
const netAmnt = amounts.reduce((accumulator, elem, i, array) => accumulator + elem, 0); //here 0 is accumulator initial value.
console.log(netAmnt);

const maxAmntVal = amounts.reduce((acc, elem) => {
  if (acc > elem) {
    return acc;
  } else {
    return elem;
  }
}, amounts[0]);
console.log(maxAmntVal); //o/p -3500

//chaining of all the methods 
const accMovements = movements.filter((mov) => mov > 0).map((mov) => mov * 2).reduce((acc, mov) => acc + mov, 0);
console.log(accMovements);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//chaining of all the methods 
const accMovements = movements.filter((mov) => mov > 0).map((mov) => mov * 2).reduce((acc, mov) => acc + mov, 0);
console.log(accMovements);

//find method - returns the first element of the array that satisfies the condition
const firstNegativeMov = movements.find((mov) => mov < 0);
console.log(firstNegativeMov);

//checks for equality - returns boolean value
const checkElemExists1 = movements.includes(450);
console.log(checkElemExists1);

//checks for condition - returns a boolean value
const checkElemExists2 = movements.some((mov) => mov > 0);
console.log(checkElemExists2);

//if every element in the array satisfiest the condition then it returns true
const checkElemExists3 = movements.every((mov) => mov > 0);
console.log(checkElemExists3);

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//find method is useful to find a particular object in array of objects based on a specific condition which is quite powerful;
const findMatchingAccount = accounts.find((acc) => acc.owner === 'Sarah Smith');
console.log(findMatchingAccount); //o/p- {owner: 'Sarah Smith', movements: Array(5), interestRate: 1, pin: 4444}


const findAccntIndex = accounts.findIndex((acc) => acc.pin === 4444);
console.log(findAccntIndex);
console.log(accounts.splice(findAccntIndex, 1));
console.log(accounts); //final array 

//flat and flatMap
const nestedArr = [1, 2, [3, [4, [7, 8]]], [5, 6]];
console.log(nestedArr.flat());//[1, 2, 3, Array(2), 5, 6]
console.log(nestedArr.flat(3)); // number indicates the array dept, o/p- [1, 2, 3, 4, 7, 8, 5, 6]

//flatMap combines flat and map method together 

//sort array method - works only for strings or numbers or for mix 
//ascending
movements.sort((a, b) => a - b);
console.log(movements);

//descending
movements.sort((a, b) => b - a);
console.log(movements);


//programmatically creating and filling arrays
const arr1 = new Array([1, 2, 4, 5, 5]);//o/p- [1,2,4,5,5]

//empty arrays
const arr2 = new Array(4);//o/p- [0,0,0,0] // weird way in case of single parameter
arr2.fill(4);//[4,4,4,4]
arr2.fill(4, 2);//second param - indicates where to start filling from // [0,0,4,4]

//Array from - new Addition in javascript
const y = Array.from({ length: 7 }, () => 1); //[1,1,1,1,1,1,1]

const movementsUI = Array.from(document.querySelectorAll('.movemeents_value')); //to select all the UI elements from DOM
