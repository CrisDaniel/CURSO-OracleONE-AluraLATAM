import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Formulario from './components/formulario';
import MiOrg from './components/MiOrg';

function App() {
  //Estado - hooks
  //useState()
  //const [nombreVariable, funcionActualizaLaVariable] = useState(valorInicial)

  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario === true ? <Formulario/> : <></>}
      {/* {mostrarFormulario && <Formulario/>} */}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
