/*1 - Crie uma função que receba dois arrays e os concatene em um único array.*/

const array1 = ["1", "2", "3"];
const array2 = [4, 5, 6];

console.log(concatenacao(array1, array2));

function concatenacao(array, array2) {
  return array.concat(array2);
}
