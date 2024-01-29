/*Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.*/

const arr = [2,4,5,7,8,9,12,34];

let total = 0;

sum(arr);

function sum(arr){
    for(sumNum of arr){
        total += sumNum;
    }
return console.log(total);
}

