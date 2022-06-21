/* Object Arrays */

var characters = [
    { age: "30", sex: "Man", class: "Spartan", weapon: "Spear", race: "Orc" },
    { age: "40", sex: "Man", class: "Priest", weapon: "Staff", race: "Faun" },
    { age: "25", sex: "Woman", class: "Ninja", weapon: "Kusarigama", race: "Human" },
    { age: "45", sex: "Man", class: "Samurai", weapon: "Katana", race: "Human" },
    { age: "34", sex: "Woman", class: "Paladin", weapon: "Claymore", race: "Elf" },
    { age: "19", sex: "Woman", class: "Rogue", weapon: "Daggers", race: "Elf" },
]

/* Array filter:  */
/* allows us to filter elements by a particular parameter */
var onlyHumans = characters.filter(function(character){
    return character.race == "Human";
})
console.log(onlyHumans);

/* Array Map:  */
/* We build an array with the selected parameters */

var characterClasses = characters.map(function(character){
    return character.class;
})
console.log(characterClasses);

