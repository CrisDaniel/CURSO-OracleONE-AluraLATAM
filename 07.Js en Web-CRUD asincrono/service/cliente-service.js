//Inicia el servidor db.json con el comando: json-server --watch db.json

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

const crearCliente = (nombre, email) =>{
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({nombre, email, id: uuid.v4()}),
  });
};

export const clienteServices = {
  listaClientes,
  crearCliente,
};