// global variable
const firstName='Sirisha';

//function scoped
function calAge(birthyear){
  const age = 2023 -birthyear;
  //block scope
  if(age == 23){
    const currentAge = 23;

    console.log(age); //age variable is accessible because its function scoped
  }

  console.log(currentAge); // output - undefined, as its block scoped
  // accessing the global var and changing its value
  firstName='Dron';
}

console.log(firstName); // output - Dron
console.log(age); // undefined 



