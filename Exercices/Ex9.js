/*Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.*/

const menuPrincipal = ['arroz', 'feijão', 'gororoba', 'janbroba'];
const menuSobremesa = ['bolo', 'doce', 'salgado', 'pudim'];

menuCompleto = menuPrincipal.concat(menuSobremesa);

console.log(menuCompleto);
