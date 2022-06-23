
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

