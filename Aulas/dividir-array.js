
const listaEstudantes = ['João', 'Carla', 'Caio', 'Karatina', 'Lohane', 'Juliana', 'Ester', 'Cocon', 'Juca', 'Hil', 'Top', 'Gis', 'Jilina', 'Dogs', 'Esgis', 'Eleven' ];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);

const sala2 = listaEstudantes.slice(sala1.length,listaEstudantes.length)

console.log(sala1);
console.log(sala2);