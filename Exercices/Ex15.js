/*Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'. */

const arr = [10, 5, 600, 7, 99];

let menor = 0;
let maior = 0;
let x, y = 0;

maiorMenor(arr);

function maiorMenor(arr) {



    menor = arr[0];
    maior = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];

        if (temp >= maior) {
            maior = temp;
        }
        if (temp <= menor) {
            menor = temp;
        }

        console.log(`menor: ${menor}`);
        console.log(`maior: ${maior}`);

    }

}