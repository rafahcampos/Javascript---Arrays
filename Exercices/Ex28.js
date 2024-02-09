/*Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.*/

const arr = [4,3,36,12,33,43,3453,54,33,23212];

const filtrar = arr.filter((num) => (num % 3 == 0 && num>5)); 

console.log(filtrar);