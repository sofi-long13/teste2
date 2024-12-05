const imagensContainer = document.querySelector(".imagens");
const imagens = document.querySelectorAll(".imagens img");
const totalImagens = imagens.length

let indiceAtual = 0;

function avancarCarrossel(){
    indiceAtual = (indiceAtual + 1) % totalImagens;

    const larguraImagem = imagens[0] .clientWidth;

    imagensContainer.style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;
}

setInterval(avancarCarrossel, 4000)


function mudaTema(){
    document.body.classList.toggle("dark-theme")
}
