/* Arrays */

var races = ["Orc", "Elf", "Human", "Dwarf", "Faun", "Centaur", "Minotaur"];

console.log("--------- ARRAY MUTATION----------");
console.log("Print array: "+ races);
console.log("Print quantity of items in the array: "+ races.length);
console.log("Get third item in the array: "+ races[2]);
races.push("Goblin");
console.log("Push goblin to array: "+ races);
races.pop();
console.log("Removin goblin from array: "+ races);
races.unshift("Goblin");
console.log("Inserting goblin to first array position: "+ races);
races.shift();
console.log("Removing first item from array: "+ races);
var dwarfPosition = races.indexOf("Dwarf")
console.log("Position of Dwarf: "+ dwarfPosition);