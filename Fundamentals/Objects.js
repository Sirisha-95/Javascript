/* Using dot and bracket operator to access object properties in javascript */

let PersonObj={firstName:'Sirisha',
               lastName:'D',
               age:27,
               hobbies:['dancing','listening to music'] }

console.log(PersonObj.age); //to directly access the property

console.log(PersonObj.hobbies[0]) // to compute the object key 


//Enhanced object literals
const Months = ['jan', 'feb', 'march'];
const PresentDate = {
    currentMonth: 'September',
    Months, // 1. directly use the same object name without a property name
    Date: '12.09.2023',
    presentMonth() { //2. directly write function property without using function keyword
        return 'September';
    },
    [Months[0]]: 'First month' // 3. compute the property name
};

console.log(PresentDate); //o/p - {currentMonth: 'September', Months: Array(3), Date: '12.09.2023', jan: 'First month'}
console.log(PresentDate.presentMonth());//o/p- September
