/*Crie uma função que receba uma array e imprima no console o número do índice e o elemento.*/

const arr = ['Maça', 'Banana', 'Pera', 'Melão'];

indexAndElement(arr);


function indexAndElement(arr) {

    for (let i = 0; i <arr.length ; i++) {

        console.log(i);
        console.log(arr[i]);
        console.log(`Posição do array: ${i}`)
        console.log(`Elemento: ${arr[i]}`);
    }
}