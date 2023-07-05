import { valida } from "./validaciones.js";

const inputs =document.querySelectorAll("input");

inputs.forEach( input => {
    input.addEventListener('blur', (event) => {
        //console.log(event.target);
        valida(event.target);
    });
});