//Optional Chaining 

//objects
const obj1 = {
    name: 'obj1',
    func1() {
        console.log('func1');
    }
};
console.log(obj1?.name?.description ?? 'property doesnot exist in object');//o/p-property doesnot exist in object 
//methods
console.log(obj1?.func2 ?? 'function doesnot exist'); //o/p-function doesnot exist

//arrays
const arr1 = [{ name: 'arr1', description: 'optional chaining in arrays' }];
console.log(arr1[0]?.name ?? 'mentioned property doesnot exist in arr1');//o/p- arr1
console.log(arr1[0]?.property ?? 'mentioned property doesnot exist in arr1 '); //o/p- mentioned property doesnot exist in arr1 


//Coding challenge
/ *Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }*/
const scored = ['Gnarby', 'Lewandowski', 'Lewandowski', 'Hummels'];
let scorers = {};
for (const [key, value] of scored.entries()) {
    console.log(value, key);
    scorers[value] ? (scorers[value] += 1) : (scorers[value] = 1);

}
console.log(scorers);
