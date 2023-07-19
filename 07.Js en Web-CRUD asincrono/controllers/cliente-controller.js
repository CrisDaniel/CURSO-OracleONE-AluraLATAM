import { clienteServices } from "../service/cliente-service.js"; 

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

clienteServices.listaClientes().then((perfil) => {
    console.log(perfil)
    perfil.forEach(datos => {
        const nuevoCliente = crearCliente(datos.nombre, datos.email);
        table.appendChild(nuevoCliente);
    });
  }).catch((error) => alert(`Ocurrio un ${error}`));