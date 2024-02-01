/*Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.*/

function executaOperacaoEmArray(arr, fcallback) {
    return arr.map(fcallback);
}

function operacaoMatematica(num) {
    return num * 2;
}
 
const arrNum = [2, 4, 6, 8, 12];

const guardaOperacao = executaOperacaoEmArray(arrNum, operacaoMatematica);
console.log(guardaOperacao);