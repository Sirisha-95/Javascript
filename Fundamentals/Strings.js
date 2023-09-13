// Strings

const str1 = 'Sirisha is a software developer';
console.log(str1.slice(12)); //o/p- software developer

// add password masking
const str2 = 11232234 + ''; // converting no to string
const last = str2.slice(-4);
console.log(last.padStart(str2.length, '*'));


//capitalize first letter of string to Uppercase
const str3 = 'welcome home';
console.log(str3.repeat(2));//welcome homewelcome home
console.log(str3.padEnd(30, '$'))//welcome home$$$$$$$$$$$$$$$$$$;
console.log(str3.toUpperCase());//WELCOME HOME
const arr = str3.split(' ');
const upperCaseArr = [];
for (const el of arr) {
    upperCaseArr.push(el[0].toUpperCase() + el.slice(1, el.length));
}
const str4 = upperCaseArr.join(' ');
console.log(str4);


//coding challenge
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

const strInput = 'underscore_case first_name Some_Variable calculate_AGE delayed_departure';

const arrOp = [];
let i = 0;
for (const el of strInput.split(' ')) {

    const [first, second] = el.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    i += 1;
}
i = 0;
