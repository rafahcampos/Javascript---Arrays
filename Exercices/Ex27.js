/* Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares, usando o método filter()*/

const arr = [22,34,33,232,33,467,987,678];

function numPar(arra){
    const isPar = arr.filter((num) => num %2 == 0)
    return isPar;
};


console.log(numPar(arr));
