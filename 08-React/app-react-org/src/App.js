import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Formulario from './components/formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  //Estado - hooks
  //const [nombreVariable, funcionActualizaLaVariable] = useState(valorInicial)

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaborador] = useState([
    
    {fotoIngresada:"https://academico.unas.edu.pe/resources/Photos/Students/2018-1/022_002018013872967105.jpg",
    equipoSeleccionado: "Front End",
    nombreIngresado:"Cristian Daniel",
    puestoIngresado:"Programador",}
  ]);
  const [equipos, actualizarEquipos] = useState(  
    [
      {
        Titulo: "Programacion",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9",
      },
      {
        Titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF",
      },
      {
        Titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2",
      },
      {
        Titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8",
      },
      {
        Titulo: "Ux y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5",
      },
      {
        Titulo: "Movil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9",
      },
      {
        Titulo: "Innovacion y Gestion",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF",
      },
    ]
  )

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Regitrado!!", colaborador);
    //spread operator
    actualizarColaborador([...colaboradores, colaborador]);
  }

  //Eliminar colaborador
  const eliminarColaborador = () =>{
    console.log("ELIMINADO");
  }

  //Cambiar color de equipo
  const cambiarColor = (color, titulo) => {
    console.log(color, titulo)
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.Titulo === titulo){
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario === true ? 
        <Formulario equiposNombre= {equipos.map( (equipo) => equipo.Titulo)} registrarColaborador = {registrarColaborador}/> : <></>}
      {/* {mostrarFormulario && <Formulario/>} */}

      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map( (equipo, index) => <Equipo 
        datos={equipo} 
        key={equipo.Titulo} 
        colaboradores = {colaboradores.filter( colaborador => colaborador.equipoSeleccionado === equipo.Titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor = {cambiarColor}
        />)
      }

      <Footer/>

    </div>
  );
}

export default App;
