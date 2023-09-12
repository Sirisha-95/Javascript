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
