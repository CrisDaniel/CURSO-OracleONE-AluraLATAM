const ciudades = ["Lima", "Huanuco", "Tocache", "VillaRica"];
const precioPasaje = [100, 30, 40, 60];
const presupuestoDisponinle = 60;

let i = 0;
while(i < ciudades.length && precioPasaje[i] > presupuestoDisponinle){
    i++;
}

if(i == ciudades.length){
    console.log('No tenemos pasajes disponibles');
} else{
    console.log(`Puedes comprar pasaje para : ${ciudades[i]}`);
}