/*
    - variavel
    - Funções
    
Botao-> For clicado -> Chamar a minha função -> Ligar som
Document = HTML
*/

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

// Ligar som
botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
    video.muted = false
}

// Mostrar modal
botao.addEventListener("click", mostrarModal)

function mostrarModal(){
    modal.style.display = "block"
}

// Esconder modal
modal.addEventListener("click", esconderModal)

function esconderModal(){
    modal.style.display = "none"
}

// Tocar o tumdum
window.addEventListener("load", tocarAudio)

function tocarAudio(){
    audio.play()
}