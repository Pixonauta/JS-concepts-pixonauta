/* Object Arrays */

let characters = [
    { age: 30, sex: "Man", class: "Spartan", weapon: "Spear", race: "Orc" },
    { age: 40, sex: "Man", class: "Priest", weapon: "Staff", race: "Faun" },
    { age: 25, sex: "Woman", class: "Ninja", weapon: "Kusarigama", race: "Human" },
    { age: 45, sex: "Man", class: "Samurai", weapon: "Katana", race: "Human" },
    { age: 34, sex: "Woman", class: "Paladin", weapon: "Claymore", race: "Elf" },
    { age: 19, sex: "Woman", class: "Rogue", weapon: "Daggers", race: "Elf" }
]

/* Array filter:  */
/* allows us to filter elements by a particular parameter */
let onlyHumans = characters.filter(character => character.race == "Human" );
console.log(onlyHumans);

var onlyHumans2 = characters.filter(function(character){
    return character.race == "Human";
})
console.log(onlyHumans);

let ageCharacter = characters.filter(character => character.age > 30);
console.log(ageCharacter);
/* Array Map:  */
/* We build an array with the selected parameters */

var characterClasses = characters.map(function(character){
    return character.class;
})
console.log(characterClasses);

/* Find */
/* Return the first element that matches the function */
var findCharacter = characters.find(function(character){
    return character.age == 25;
})
console.log(findCharacter);

/* Some */
/* Return true or false if find at least one element that matches the function */
var someCharacter = characters.some(function(character){
    return character.age >= 40;
})
console.log(someCharacter);

/* ForEach */
/* Make a loop for all elements with a function that process the data */
var forEachCharacter = characters.forEach(function(character){
    return console.log(character.class);
})

//console.log(forEachCharacter);