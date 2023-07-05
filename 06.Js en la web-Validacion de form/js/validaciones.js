const fechaNacimiento = document.getElementById("birth");

fechaNacimiento.addEventListener("blur", (evento) => {
    validarNacimiento(evento.target);
});

const validarNacimiento = (input) =>{
    const fechaUsuario = new Date(input.value);
    //Sin el else el valor del setCustomValidity conservaria el valor del "mensaje", impidiendo ingresar, aun si la fecha sea mayor de edad.
    if(validarEdad(fechaUsuario)){
        let mensaje = 'Debes tener almenos 18 años de edad';
        input.setCustomValidity(mensaje);
    }else{
        mensaje = '';
        input.setCustomValidity(mensaje);
    };
}

const validarEdad = (fecha) =>{
    const fechaActual = new Date();
    const fechaEvaluar = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return fechaActual < fechaEvaluar; //Si es true es menor de edad
}