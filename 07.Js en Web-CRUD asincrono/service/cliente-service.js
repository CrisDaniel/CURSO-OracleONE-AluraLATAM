const http = new XMLHttpRequest();
console.log(http);

//Abrir http (metodo, url)

//CRUD  -   Metodos http
//Create    -   POST
//Read      -   GET
//Update    -   PUT/PATCH
//Delete    -   DELETE

http.open("GET", "http://localhost:3000/perfil");   //Configuramos la solicitud http al servidor con el metodo open(metodo. url)
http.send();                                        //Envia la solicitud
http.onload = () =>{                                //Se establece una funcion de devolucion de llamada del evento "load", este solo se activa cuando se completa la solicitud y se recibe una respuesta
    const data = http.response;                     //"response" contiene la respuesta del servidor y se guarda en la constante "data"
    console.log(data);
};