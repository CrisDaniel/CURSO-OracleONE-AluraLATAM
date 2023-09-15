import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const {colorPrimario, Titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    return <>
        {colaboradores.length > 0 && //Si la cantidad de colaboradores > 0, entonces devuelveme la parte de section y si no, no devuelvas nada
            <section className="equipo" style={{backgroundColor: hexToRgba(colorPrimario, 0.6)}}>
                <input type="color" className="input-color" value = {colorPrimario} onChange={(eveto) => actualizarColor(eveto.target.value, id)}/>
                <h3 style={{borderColor: colorPrimario}}>{Titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador,index) => <Colaborador 
                        datos = {colaborador} 
                        key={index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador = {eliminarColaborador}
                        like={like}
                        />)
                    }
                </div>
            </section>
        } 
    </>
}

export default Equipo