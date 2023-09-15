import { useState } from "react";
import {v4 as uuid} from 'uuid';
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListOpciones from "../listaOpciones";
import Boton from "../Boton";


const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [Titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("#FFFFFF");

    const {registrarColaborador, crearEquipo} = props;

    const enviarInformacion = (evento) =>{
        evento.preventDefault();
        const datosAEnviar = {
            id: uuid(),
            nombreIngresado: nombre,
            puestoIngresado: puesto,
            fotoIngresada: foto,
            equipoSeleccionado: equipo,
        }
        registrarColaborador(datosAEnviar);
    };

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault();
        crearEquipo({Titulo, colorPrimario: color});
    }

    return <section className="formulario">
        <form onSubmit={enviarInformacion}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListOpciones valor={equipo} actualizarValor={actualizarEquipo} equiposNombre= {props.equiposNombre}/>
            <Boton texto="Crear"/>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Titulo" placeholder="Ingresar Titulo" required valor={Titulo} actualizarValor={actualizarTitulo}/>
            <CampoTexto titulo="Color" placeholder="Ingresar Color en Hex" required valor={color} actualizarValor={actualizarColor} type="color"/>
            <Boton texto="Registrar equipo"/>
        </form>
    </section>
};

export default Formulario;