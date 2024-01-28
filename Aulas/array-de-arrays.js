const alunos = ["João", "Juliana", "Caio", "Ana"];
const notas = [10, 8, 7.5, 9];

//               [0]   [1]
const lista = [alunos,notas];

console.log(lista);

console.log(
    `O aluno ${lista[0][2]}
possui a nota ${lista[1][3]}
    `
);

