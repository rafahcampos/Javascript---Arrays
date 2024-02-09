//Operador de espalhamento, Spread '...';

const notas = [7, 7, 8, 9]; 
//const novaListaNotas = [...notas];
const novaListaNotas = [...notas, 55];  //inserindo um novo array já com a clonagem

novaListaNotas.push(22);

console.log(notas);
console.log(novaListaNotas);