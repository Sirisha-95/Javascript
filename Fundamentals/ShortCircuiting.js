// Logical operators & Short circuiting

//short cuiting for OR returns the last argument , if all of the initial ones are falsy
const shtct1 = '' || 20; //o/p - 20
const shtct2 = undefined || null; //o/p- null
console.log(shtct1);
console.log(shtct2);

//short cuiting for && returns the first argument , if all of the initial ones are truth
const shtct3 = '' && 20; //o/p - ''
const shtct4 = undefined && null; //o/p- undefined
console.log(shtct3);
console.log(shtct4);

//nullish coleascing operator ?? - returns not null or undefined
const shtct5 = null ?? 10;//o/p - 10
const shtct6 = 0 ?? 20;//o/p- 0
console.log(shtct5);
console.log(shtct6);
