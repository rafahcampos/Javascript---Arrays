/*Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.*/

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

let media = 0;

console.log(calculaMedia(numeros));

function calculaMedia(numeros) {
    for (num of numeros) {
        media += num;
        console.log(media);
    }
    return media = media / numeros.length;
}