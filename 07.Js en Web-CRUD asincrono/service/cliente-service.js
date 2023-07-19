//Inicia el servidor db.json con el comando: json-server --watch db.json
const crearCliente = (nombre, email) => {
    const linea = document.createElement("tr");
    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">
          Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button">
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
    linea.innerHTML = contenido;
    return linea;
}

const table = document.querySelector("[data-table]");

//CRUD  -   Metodos http
//Create    -   POST
//Read      -   GET
//Update    -   PUT/PATCH
//Delete    -   DELETE

//Todo este codigo es igual a la de abajo - Primera forma de crear una solicitud http GET - Recomendada
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());
console.log(listaClientes()); 

//Todo - Segunda forma de conectar
/*const listaClientes = () => {
  return fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());
}*/

//Todo - Tercera forma de conectar
/*const listaClientes = () => {

  const promesa = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest(); //instancia de la clase XMLHttpRequest: proporciona funcionalidad para realizar solicitudes HTTP asíncronas desde un navegador web.

    http.open("GET", "http://localhost:3000/perfil");   //Configuramos la solicitud http al servidor con el metodo open(metodo. url)
    http.send();                                        //Envia la solicitud
    http.onload = () =>{                                //Se establece una funcion de devolucion de llamada del evento "load", este solo se activa cuando se completa la solicitud y se recibe una respuesta
      const respuesta = JSON.parse(http.response);      //"response" contiene la respuesta del servidor y se guarda en la constante "perfil" - JSON.parse lo convierte de un fomrato textHTML a un objeto js
      if (http.status >= 400) {
        reject(respuesta);
      }else{
        resolve(respuesta);
      }
    }; 
  });
  return promesa;
};*/

listaClientes().then((perfil) => {
  console.log(perfil)
  perfil.forEach(datos => {
      const nuevoCliente = crearCliente(datos.nombre, datos.email);
      table.appendChild(nuevoCliente);
  });
}).catch((error) => alert(`Ocurrio un ${error}`));
  