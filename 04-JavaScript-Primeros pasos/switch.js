const ciudades = ["Lima", "Huanuco", "Tocache", "VillaRica"];
const ciudadDestino = "Lima";

switch (ciudadDestino) {
    case ciudades[0]:
        console.log('Valor del pasaje: '+ 100);
        break;
    case ciudades[1]:
        console.log('Valor del pasaje: '+ 30);
        break;
    case ciudades[2]:
        console.log('Valor del pasaje: '+ 40);
        break;
    case ciudades[3]:
        console.log('Valor del pasaje: '+ 50);
        break;
    default:
        console.log('No existe la ciudad');
        break;
}