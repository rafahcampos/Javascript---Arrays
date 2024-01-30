const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//notas.forEach(function (nota) {
  // console.log(`nota atual: ${nota}`); //a variavel 'nota' funciona como uma variável temporaria, e o forEach é usado como um index, basicamente
    //somaDasNotas += nota;
//});


notas.forEach(somaNota);    //Por referência

function somaNota(nota){
    somaDasNotas += nota;

}

const media = somaDasNotas / notas.length;

console.log(media);