// Primitive types

let firstName = 'Sirisha';
let newName = firstName; // both firstname and name points to same memory address in call stack
newName = 'Siri';// new memory address is created in stack
console.log(firstName); //o/p - Sirisha
console.log(newName);//o/p- Siri

// Reference types

const Obj1 = { age: 27 }; // creates a object in heap, with a new address pointing to object in call stack
const Obj2 = Obj1; // points both objs to same memory address stored in heap
Obj2.age = '28';
console.log(Obj1.age);//o/p - 28, because here the object stored in heap is modified. 

// Obj2={}; -- cannot change the memory address as its a const, if it was let variable then this is possible


//copying objects

const Obj3 = {
    name: 'Sirisha',
    hobbies: ['hob1', 'hob2']
};
const Obj4 = Object.assign({}, Obj3); //creates a new object , only does first level or shallow copy i.e if there is an object within this object that is not mutable.
Obj4.name = 'Dron';
Obj4.hobbies.push('hobb3');

console.log(Obj3.hobbies);
console.log(Obj4.hobbies); // both logs same hobbies, because its not a deep clone using Object.assign


