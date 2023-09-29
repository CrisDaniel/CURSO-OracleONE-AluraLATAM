export const validarNombre = (nombre) => {
    const length = nombre.length;

    return (length > 1 && length < 30) ? true : false;
}

export const validarApelllido = (apellido) => {
    const length = apellido.length;

    return (length > 1 && length < 40) ? true : false;
}

export const validarTelefono = (telefono) => {
    const length = telefono.length;

    return (length === 9) ? true : false;
}