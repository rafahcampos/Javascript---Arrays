const notas = [10, 9.5, 8, 7, 6];

//const notasAtualizadas = notas.map(function //(nota) {
//    return nota + 1;
//});

const notasAtualizadas = notas.map((nota) => nota + 1); //usando uma arrow function


console.log(notasAtualizadas);