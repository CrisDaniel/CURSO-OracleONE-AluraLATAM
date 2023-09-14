import { useState } from 'react';
import {v4 as uuid} from 'uuid';
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
    
    {
      id: uuid(),
      fotoIngresada:"https://academico.unas.edu.pe/resources/Photos/Students/2018-1/022_002018013872967105.jpg",
      equipoSeleccionado: "Front End",
      nombreIngresado:"Cristian Daniel",
      puestoIngresado:"Programador",
    }
  ]);
  const [equipos, actualizarEquipos] = useState(  
    [
      {
        id: uuid(),
        Titulo: "Programacion",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9",
      },
      {
        id: uuid(),
        Titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF",
      },
      {
        id: uuid(),
        Titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2",
      },
      {
        id: uuid(),
        Titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8",
      },
      {
        id: uuid(),
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
        id: uuid(),
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
    //spread operator
    actualizarColaborador([...colaboradores, colaborador]);
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) =>{
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaborador(nuevosColaboradores);
  }

  //Cambiar color de equipo
  const cambiarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  }

  //Crear nuevo equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()} ]);
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario === true ? 
        <Formulario equiposNombre= {equipos.map( (equipo) => equipo.Titulo)} registrarColaborador = {registrarColaborador} crearEquipo={crearEquipo}/> : <></>}
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
