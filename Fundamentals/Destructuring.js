//for of loop to loop over arrays
const arr1 = ['fooditem1', 'fooditem2', 'fooditem3'];

for (const item of arr1) {
    console.log(item); //o/p- fooditem1
}

for (const item of arr1.entries()) {
    console.log(item); //o/p - [0,fooditem1]
}

//destructuring arrays
for (const [i, el] of arr1.entries()) {
    console.log(i, el); //o/p - 0,fooditem1
}

//Destructuring objects with default values
const obj1 = { name: 'Sirisha', age: 27 };
const { name , age, hobbies=[] } = obj1;
console.log(name, age,hobbies)//o/p- Sirisha  27 []
