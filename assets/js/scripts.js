var characters = ["Samurai", "Ninja", "Spartan"];
/* Array loop  */
console.log("--------- ARRAY LOOP----------");

function HelloCharacter(character){
    console.log(`Hello ${character}!`);
}

/* "FOR Classic"  */
console.log("'FOR Loop Classic'------------");
for(var i=0 ; i<characters.length ; i++){
    HelloCharacter(characters[i]);
}

/* "FOR Simple"  */
console.log("'FOR Loop Simple'-------------");
for(var character of characters){
    HelloCharacter(character);
}