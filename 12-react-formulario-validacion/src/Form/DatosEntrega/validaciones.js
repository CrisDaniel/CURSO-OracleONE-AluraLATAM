export const validarDireccion = (direccion) => {
    const length = direccion.length;

    return (length > 2 && length < 30) ? true : false;
}

export const validarCiudad = (ciudad) => {
    const length = ciudad.length;

    return (length > 2 && length < 12) ? true : false;
}

export const validarProvincia = (provincia) => {
    const length = provincia.length;

    return (length > 2 && length < 12) ? true : false;
}