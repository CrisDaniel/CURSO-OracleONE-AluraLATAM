import "./CampoTexto.css"

const CampoTexto = (props) =>{

    const manejarCambio = (evento) => {
        props.actualizarValor(evento.target.value);
    };

    const {type = "text"} = props;

    const placeholder = `${props.placeholder}...`;
    return <div className= {`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input type= {type} placeholder={placeholder} required = {props.required} value={props.valor} onChange={manejarCambio}/>
    </div>
}

export default CampoTexto;  