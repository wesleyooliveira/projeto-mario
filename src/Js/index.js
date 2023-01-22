/* 
Objt 1-  Quando o usuario clicar no botao de ver trailer, devemos abrir a modal com o video do trailer

objt 2- quando o usuario clicar no X devemos fechar o modal

1- passo 1 = dar um jeito de pegar o elemento que representa o botão na tela usando o JS.

passo 2 - dar um jeito de identificar quando o usuario clicar no botao

passo 3 - dar um jeito de pegar o elemento da modal no JS

passo 4 - abrir a modal na tela
..............................................
2 - Passo 1 - dar um jeito de pegar o elemento de fechar o modal usando o JS
 passo 2 - dar um jeito de identificar quando o usuario clicar no X
  passo 3 - fechar a modal
*/

console.log('mostrar o document', document);
// passo 1 = dar um jeito de pegar o elemento que representa o botão na tela usando o JS. Linha 21
console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const linkDoVideo = video.src;
// passo 3 dar um jeito de pegar o elemento da modal no JS

const modal = document.querySelector(".modal");

// passo 2 - dar um jeito de identificar quando o usuario clicar no botao
function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botao de ver o trailer");
    // passo 4 - abrir a modal na tela
    alternarModal();
    video.setAttribute("src", linkDoVideo);
})

// 2 - Passo 1 - dar um jeito de pegar o elemento de fechar o modal usando o JS
//  passo 2 - dar um jeito de identificar quando o usuario clicar no X
//   passo 3 - fechar a modal

// Passo 1
const botaoFecharModal = document.querySelector(".fechar-modal");

 //  passo 2 - dar um jeito de identificar quando o usuario clicar no X
botaoFecharModal.addEventListener("click", () => {
    // passo 3 fechar modal 
    modal.classList.toggle("aberto");
    video.setAttribute("src", "");
})




