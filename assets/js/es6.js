/************************************
 *          ECMASript 6
 ***********************************/


// Default values
function myFunctionES6(color = 'yellow', country = 'Venezuela', sex = 'woman'){
    console.log( color, country, sex); 
}

myFunctionES6();
myFunctionES6('blue', 'Colombia', 'man');

// Template literals> used for concatenate strings
let string1 = 'Hello';
let string2 = 'world';
let allText = `${string1} ${string2}`;
console.log(allText);

//Multiline without /n using ``
let phrase1 = `here born the best programmers
of the world`;
console.log(phrase1);

//array to single variables\
let arrayExample = {
    color: 'blue',
    age: '29',
    sex: 'Male'
}
let {color, age, sex} = arrayExample;
console.log(color);
console.log(age, sex);

//Concatenate arrays
let arrayAnimals1 = ['Lion', 'Eagle', 'Dolphin', 'Cat'];
let arrayAnimals2 = ['Dog', 'Owl', 'Tiger', 'Wale'];
let arrayAllAnimals = [...arrayAnimals1, ...arrayAnimals2];
console.log(arrayAllAnimals);

//Object building
let colorEx = 'Red';
let ageEx = '30';
let sexEx = 'woman';

let objEx = { colorEx, ageEx, sexEx};
console.log(objEx);

//Arrow Functions

let people = [
    {name: 'Julian', sex: 'Male', age:'66'},
    {name: 'Maria', sex: 'Female', age:'35'},
    {name: 'Camila', sex: 'Female', age:'22'}
]
//ES5 example: return all names
console.log('----------ES 5----------');
let peopleNames = people.map(function(person){
    console.log(person.name);
});

//ES6 example
console.log('----------ES 6----------');
let peopleNames3 = people.map(person => console.log(person.name));

//ES6 example 2
const height = 500;
const width = 400;
let arrowFunction1 = (h,w) => console.log(h*w);
arrowFunction1(height, width);

//PROMISES...