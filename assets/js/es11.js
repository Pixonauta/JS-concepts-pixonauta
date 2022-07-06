/* ECMASScript 11 Dynamic import example*/
//dynamic import: podremos realizar importacion dinamica de piezas de codigo

const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});