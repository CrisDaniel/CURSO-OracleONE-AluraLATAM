import "./listaOpciones.css"

const ListOpciones = () => {
        //Metodo map - arreglo.map( (equipo) =>{
        //  return <option></option>
        //})

        const equipos = [
            "Programacion",
            "Front End",
            "Data Science",
            "Devops",
            "Ux y Diseño",
            "Movil",
            "Innovacion y Gestion"
        ];
    return <div className="listaOpciones">
        <label>Equipos</label>
        <select>
            {equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option>
            })}
        </select>
    </div>
};

export default ListOpciones;