export function valida(input){
    const tipoDeInput = input.dataset.tipo; //tipoDeInput = nacimiento;
    //console.log(tipoDeInput);
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    //console.log(validadores[tipoDeInput]);
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
    } else {
        input.parentElement.classList.add("input-container--invalid");
    }
}

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio",
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido",
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Debe contener al menos una letra minúscula, una letra mayúscula, un dígito y no contener caracteres especiales. Debe tener una longitud entre 6 y 12 caracteres",
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener almenos 18 años de edad",
    },
};

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};

const validarNacimiento = (input) =>{
    const fechaUsuario = new Date(input.value);
    //Sin el else el valor del setCustomValidity conservaria el valor del "mensaje", impidiendo ingresar, aun si la fecha sea mayor de edad.
    if(validarEdad(fechaUsuario)){
        let mensaje = 'Debes tener almenos 18 años de edad';
        input.setCustomValidity(mensaje);
    }else{
        let mensaje = '';
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