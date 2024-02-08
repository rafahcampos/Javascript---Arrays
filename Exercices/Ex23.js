/*5 - Considere um array de números inteiros:
const numeros = [6, 9, 12, 15, 18, 21];
Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array.*/

const numeros = [6, 9, 12, 15, 18, 21];

//const multiplicar = numeros.forEach((resultado) => console.log(resultado * 3));

const multiplicar = numeros.forEach((resultado) => {
  console.log(resultado * 3);
});

const simeh18 = (numeros.findIndex((eh18) => eh18 == 18));

console.log(`Índice 18: [${simeh18}]`);