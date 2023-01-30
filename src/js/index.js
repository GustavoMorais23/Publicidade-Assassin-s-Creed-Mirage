/*

OBJETIVO 1 - Quando o usuário clicar no botão de ver trailer,devemos abrir a modal com o video do trailer
passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js 
passo 2 - dar um jeito de identificar o clique no botão
passo 3 - dar um jeito de pegar o elemento da modal no js
passo 4 - abrir a modal na tela

OBJETIVO 2 - Quando o usuário clicar no "x", devemos fechar a modal
passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o js 
passo 2 - dar um jeito de identificar quando clicar no "x"
passo 3 - fechar a modal

*/


// OBJ 1- P1
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector (".modal");
const LinkDoVideo = video.src;
// P2
botaoTrailer.addEventListener("click", () => {
    // P4
    modal.classList.add ("aberto");
    video.setAttribute("src", LinkDoVideo );
});
// OBJ 2- P1
const botaoFecharModal = document.querySelector(".fechar-modal");
// P2
botaoFecharModal.addEventListener("click", () => {
    // P3
    modal.classList.remove("aberto")
    video.setAttribute("src", "");
});