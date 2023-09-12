// this keyword refers to the object calling the method

const obj1 ={
  name:'obj1',
  calAge:function(){
    console.log('calling from ${this.name}');
  }
}
console.log(obj1.calAge()); //o/p - calling from obj1


const obj2 ={
  name:'obj2'
}
obj2.calAge = obj1.calAge;
console.log(obj2.calAge()); //o/p - calling from obj2


const f = obj1.calAge;
f();  // o/p - undefined because here 'f' is not an object

// Regular funcs
// curly braces here is not block scope but just a object literal
const Fn1 = {
    firstname: 'Sirisha',
    year: '1995',
    printName: function () {
        console.log(this);
        console.log(this.firstname);
        // creating a function inside method
        /* const birthYear = function () {
             console.log(this.year);// o/p - undefined (inside a regular fn call this keyword is undefined)
         }
         birthYear();*/

        // creating a function inside method Solution 1 assigning this keyword to const 
        const self = this
        const birthYear1 = function () {
            console.log(self.year);// o/p - 1995
        }
        birthYear1();

        // creating a function inside method Solution 2 - using arrow function with this keyword (since arrow fn inherits the parent object scope)

        const birthYear2 = () => {
            console.log(this); //o/p - prints Fn1 object 
            console.log(this.year);// o/p - 1995
        }
        birthYear2();


    },
    printArrName: () => {
        console.log(this.firstname);
    }
}

Fn1.printName(); // o/p - Sirisha

Fn1.printArrName(); //o/p - undefined (since in arrow fns this refers to global object )

