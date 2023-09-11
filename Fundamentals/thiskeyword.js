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
