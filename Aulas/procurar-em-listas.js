const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
  if (lista[0].includes(aluno)) {
    const indice = lista[0].indexOf(aluno); //indexOf guarda a posição do array em que o aluno está,ex:posição 1;
    const mediaAluno = lista[1][indice];
    console.log(`O Aluno(a) ${alunos[indice]}, possui a nota de ${mediaAluno}`);
  }else{
    console.log(`Aluno não existente`);
  }
}

exibeNomeENota('Caio');
exibeNomeENota('Ana');
exibeNomeENota('Katarina');
