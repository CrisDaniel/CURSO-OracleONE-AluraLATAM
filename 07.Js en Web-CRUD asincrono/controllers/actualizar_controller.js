import { clienteServices } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        window.location.href = "../screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    try {
        const perfil = await clienteServices.detalleCliente(id); //Hace que espere hasta que la promesa se resuelva y tenorne una respuesta
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.value = perfil.email
        } else{
            throw new Error();  // Si hay error, para el flujo normal del programa, la ejecucion se desviara al catch() mas cercano donde se manejara el error.
        }
    } catch (error) {
        window.location.href = "../screens/error.html";
    }


    /*
    clienteServices.detalleCliente(id).then(perfil => {
        nombre.value = perfil.nombre;
        email.value = perfil.email
    });*/
}

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clienteServices.actualizarCliente(nombre, email, id).then(() => {
        window.location.href = "../screens/edicion_concluida.html";
    });
});