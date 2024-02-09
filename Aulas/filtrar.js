const alunos = ['Ana', 'Marcos', 'Maria', 'Maura'];
const medias = [7, 4.5, 8, 7.5];

//const tamanhoNome = alunos.filter((aluno) => {   //retorna baseado no numero de caracteres
//  return aluno.length < 4; 
//});

const reprovados = alunos.filter((_,/*alunos*/ indice) => {  // pode-se omitir os parametros que não serao usados no retorno, como o "Aluno", podendo passar como boa pratica um "_" (underline)
    return medias[indice] < 7;
});

console.log(reprovados);

