/* Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.*/

const arrNum = [2,4,6,8,9,11,12,2343];

const elements = arrNum.forEach(function(arr, index)  {
    //console.log(`O elemento é: ${arr}`); // Forma 1
    //console.log(`O indice é: ${arrNum.indexOf(arr)}`);  // Forma 1

    console.log(`O elemento é: ${arr}`); 
    console.log(`O indice é: ${index}`);
});