// ES6 features - Sets & Maps

//Sets - To remove duplicates from Array
const arr1 = ['fullstack', 'frontend', 'backend', 'frontend', 'fullstack'];
const set1 = new Set(arr1);
console.log(set1);//o/p- Set(3) {'fullstack', 'frontend', 'backend'}
console.log(set1.size);
//looping over Set
for (const el of set1) {
    console.log(el); //o/p- fullstack frontend backend
}

const arr2 = [...set1];
console.log(arr2);//removing duplicates from an array

const str1 = 'sirinnnnnnnnkwnekwn';
console.log(new Set(str1).size);//to count the different literal in a string -  7 


//Maps- its a Data structure to store key value pairs in JS.
// Difference b/w objects and Maps, the keys in Maps can be of any data type

const map1 = new Map();
map1.set('categories', ['cat1', 'cat2', 'cat3'])
    .set('open', 11)
    .set('close', 24)
    .set(true, 'we are open')
    .set(false, 'we are closed');

console.log(map1.get(true));//o/p- we are open
console.log(map1.has(true));//o/p-true
map1.delete('open'); // deletes the open property from map
map1.size
map1.clear()// to remove all elements from map similar to sets.

// map1.set([1,2],'Test');
// map1.get([1,2]) //o/p- undefined doesnot work this way
const arr = [1, 2];
map1.set(arr, 'Test');
map1.get(arr); //o/p- Test


//loop over maps
const map2 = new Map([['question', 'what is my name'], ['answer', 'Sirisha']]);
for (const key of map2) {
    console.log(key);//o/p - (2) ['question', 'what is my name'], (2) ['answer', 'Sirisha']
}

//convert map to array
console.log([...map2]);//[Array(2), Array(2)] -0: (2) ['question', 'what is my name'], 1: (2) ['answer', 'Sirisha']
