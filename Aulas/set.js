//removendo dados duplicados do array, função 'Set(), como no exemplo abaixo removeu os nomes iguais.

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//const nomesAtualizados = new Set(nomes); //esta const deixa de ser um array

const listaNomesAtualizados = [...new Set(nomes)]; //desta forma o set é usado mantendo as caracteristicas de um array

//console.log(nomesAtualizados);
console.log(listaNomesAtualizados);