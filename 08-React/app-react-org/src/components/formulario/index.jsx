import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListOpciones from "../listaOpciones";
import Boton from "../Boton";


const Formulario = () => {

    const enviarInformacion = (evento) =>{
        evento.preventDefault();
        console.log("Envio exitoso", evento);
    };

    return <section className="formulario">
        <form onSubmit={enviarInformacion}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
            <ListOpciones/>
            <Boton texto="Crear"/>
        </form>
    </section>
};

export default Formulario;