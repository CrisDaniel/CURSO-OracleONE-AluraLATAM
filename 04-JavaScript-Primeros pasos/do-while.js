//las comillas indican que la propiedad es una cadena de texto y, en caso contrario, se considera como un identificador. Sin embargo, en cuanto a su uso práctico y acceso a las propiedades del objeto, no hay diferencias significativas.

const presupuestoDisponinle = 15;
const datos = [
    {
        'ciudad': "Lima",
        precio: 100
    },
    {
        'ciudad': "VillaRica",
        precio: 60
    },
    {
        'ciudad': "Tocache",
        precio: 40
    },
    {
        'ciudad': "Huanuco",
        precio: 30
    }
];

let i = 0;
let ciudadSeleccionada = '';
/*while(i < datos.length && datos[i].precio > presupuestoDisponinle){
    i++;
}*/

//do while

do {
    if(datos[i].precio < presupuestoDisponinle){
        ciudadSeleccionada = datos[i].ciudad;
    }
    i++;
} while(i < datos.length && ciudadSeleccionada == '')

if(ciudadSeleccionada == ''){
    console.log('No tenemos pasajes disponibles');
} else{
    console.log(`Puedes comprar pasaje para : ${ciudadSeleccionada}`);
}