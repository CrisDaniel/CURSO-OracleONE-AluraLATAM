import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, Titulo} = props.datos
    const {colaboradores} = props;

    return <>
        {colaboradores.length > 0 && //Si la cantidad de colaboradores > 0, entonces devuelveme la parte de section y si no, no devuelvas nada
            <section className="equipo" style={{backgroundColor: colorSecundario}}>
                <h3 style={{borderColor: colorPrimario}}>{Titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador,index) => <Colaborador datos = {colaborador} key={index}/>)
                    }
                </div>
            </section>
        } 
    </>
}

export default Equipo