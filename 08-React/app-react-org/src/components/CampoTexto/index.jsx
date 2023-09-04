import "./CampoTexto.css"

const CampoTexto = (props) =>{

    const manejarCambio = (evento) => {
        props.actualizarValor(evento.target.value);
        console.log("evento");
    };

    const placeholder = `${props.placeholder}...`;
    return <div className="campo_text">
        <label>{props.titulo}</label>
        <input type="text" placeholder={placeholder} required = {props.required} value={props.valor} onChange={manejarCambio}/>
    </div>
}

export default CampoTexto;  