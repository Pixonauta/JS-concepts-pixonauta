/************************************
 *          ECMASript 8
 ***********************************/

const arrayExampleES8 = {
    color: 'blue',
    age: '29',
    sex: 'Male'
}

//OBJECT Entries
const entries = Object.entries(arrayExampleES8)
console.log(entries);

//OBJECT Values
const values = Object.values(arrayExampleES8)
console.log(values);

//PadStar & PadEnd
const stringES8 = 'hello';
console.log(stringES8.padStart(9, 'say '));

console.log(stringES8.padEnd(11, ' world'));