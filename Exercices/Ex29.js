/*Crie uma função que receba um array de números e retorne a soma de todos os elementos.*/

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const valorInicial = 0;

const soma = num.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual,
  valorInicial
);
console.log(soma);
