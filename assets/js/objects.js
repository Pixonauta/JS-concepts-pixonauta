/* Objects */

var myCharacter = {
    age: "30",
    class: "Spartan",
    weapon: "Spear",
    race: "Orc",
    infoCharacter: function() {
        console.log(`The warrior is a ${this.age} years old ${this.class} ${this.race} equiped with a ${this.weapon}`);
    }
}

console.log(myCharacter.weapon);