/*Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1". */

const arr = [10, 20, 22, 24, 55];
const searchNumber = 24;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == searchNumber) {
    console.log([i]);
  } else {
    console.log(-1);
  }
}
