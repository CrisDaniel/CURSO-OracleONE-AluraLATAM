import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListOpciones from "../listaOpciones";
import Boton from "../Boton";


const Formulario = () => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const enviarInformacion = (evento) =>{
        evento.preventDefault();
        const datosAEnviar = {
            nombreIngresado: nombre,
            puestoIngresado: puesto,
            fotoIngresada: foto,
            equipoSeleccionado: equipo,
        }
        console.log("==>", datosAEnviar);
    };

    return <section className="formulario">
        <form onSubmit={enviarInformacion}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListOpciones valor={equipo} actualizarValor={actualizarEquipo}/>
            <Boton texto="Crear"/>
        </form>
    </section>
};

export default Formulario;