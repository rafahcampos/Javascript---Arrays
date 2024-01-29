const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//primeira expressão é execultada somente uma vez
//segunda expressão: condição de execução
//length retorna a quantidade de elementos de um array, não o tamanho do mesmo.
//terceira expressão: será sempre ao final do bloco

for (let i = 0; i < notas.length; i++) {
  console.log(i, notas[i]);
}
