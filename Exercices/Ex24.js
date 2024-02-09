/*Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.*/


const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

function allArr(arr, arr2) {
    const allInOne = [...arr , arr2];
    return allInOne;
}

;

console.log(allArr(arr, arr2));