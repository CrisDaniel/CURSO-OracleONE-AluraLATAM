export function valida(input){
    const tipoDeInput = input.dataset.tipo; //tipoDeInput = nacimiento;
    //console.log(tipoDeInput);
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    //console.log(validadores[tipoDeInput]);
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        //input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input); //nombre, elementoHTML
    }
}

const tipoDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
    },
    email: {
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido",
    },
    password: {
        valueMissing: "La contraseña no puede estar vacio",
        patternMismatch: "Debe contener al menos una letra minúscula, una letra mayúscula, un dígito y no contener caracteres especiales. Debe tener una longitud entre 6 y 12 caracteres",
    },
    nacimiento: {
        valueMissing: "La fecha de nacimiento no puede estar vacio",
        customError: "Debes tener almenos 18 años de edad",
    },
};

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoInput, input){   //(nombre, elementoHTML)
    let mensaje = "";
    tipoDeError.forEach(error =>{
        console.log(error);
        if(input.validity[error]){
            console.log(tipoInput, error);
            console.log(input.validity);
            console.log(input.validity[error]);
            mensaje = mensajesDeError[tipoInput][error];
        }
    })
    return mensaje
}

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