/*Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança. */

const meuArray = [ ];

meuArray.push(3,4,6);

console.log(`Foram adicionados os números: ${meuArray}`);

const numInicial = meuArray[0];

meuArray[0] = meuArray[0] * 2;

console.log(`Foi alterado o numero: ${numInicial}, pelo dobro do valor,ficando o array: ${meuArray}`);

