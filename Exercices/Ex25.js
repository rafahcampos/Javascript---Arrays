/*Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.*/

const valores = [10, 12, 34, 56];

function somaVlr(vlr) {

    const somaValores = vlr.reduce((acumulador, valor) =>
        acumulador + valor, 0
    );

    const soma = somaValores + vlr.length;

    return soma;
}

console.log(somaVlr(valores));
