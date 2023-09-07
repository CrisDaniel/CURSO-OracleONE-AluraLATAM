import "./listaOpciones.css"

const ListOpciones = (props) => {

    const manejarCambio = (evento) => {
        props.actualizarValor(evento.target.value);
    }

    return <div className="listaOpciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equiposNombre.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
};

export default ListOpciones;