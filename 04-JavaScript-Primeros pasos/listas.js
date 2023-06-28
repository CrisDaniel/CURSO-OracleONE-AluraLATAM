let ciudades = ["Huancayo", "Huanuco", "Cuzco"];
let paises = ["Peru", "Nicaragua", "Inglaterra", "Australia", "Argentina"];

//*Agregar un elemento al array
ciudades.push("Chiclayo");

//*Agregar al inicio del array
ciudades.unshift("Lambayeque");
console.log(ciudades);

//Agregar y adicionar elementos a una lista
paises.splice(1, 2, 'Japon', 'China' );
console.log(paises);

//*Eliminar el primer elemento
paises.shift();

//*Eliminar el primer elemento
paises.pop();

//Mostrar el tamaño de la lista
console.log(paises.length);
console.log(paises);


//Busqueda de un elemento en la lista
let paisesDeOceania = paises.filter( (pais) => pais === "Australia");
console.log(`Pais perteneciente a oceania: ${paisesDeOceania}`);

let paisNombreCorto = paises.filter( (pais) => pais.length <= 5);
console.log(`Los paises con los nombres cortos son: ${paisNombreCorto}`);

//*Convertir la lista en una cadena de caracteres separado por un /
console.log(paises.join("/"));

//Ordenar la lista
console.log(paises.sort());

//Saber la ubicacion de un elemento
console.log(`Cuzco esta en la posicion:${ciudades.indexOf("Cuzco")}`);

//Unir dos listas
/*let paisesYciudades = ciudades.concat(paises);*/
let paisesYciudades = [...ciudades, ...paises];
console.log(`La lista de ciudades y paises: ${paisesYciudades}`);