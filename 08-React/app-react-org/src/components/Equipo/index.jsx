import "./Equipo.css"

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, Titulo} = props.datos

    return <section className="equipo" style={{backgroundColor: colorSecundario}}>
        <h3 style={{borderColor: colorPrimario}}>{Titulo}</h3>
        <div className="colaboradores"></div>
    </section>
}

export default Equipo