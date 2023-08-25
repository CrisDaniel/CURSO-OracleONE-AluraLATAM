import "./CampoTexto.css"

const CampoTexto = (props) =>{
    const placeholder = `${props.placeholder}...`
    return <div className="campo_text">
        <label>{props.titulo}</label>
        <input type="text" placeholder={placeholder} required = {props.required}/>
    </div>
}

export default CampoTexto;  