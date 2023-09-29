
var loadingSpin = document.getElementById('loadingSpin');
var btnIniciarJogo = document.getElementById('iniciar_jogo');

function loading() {
    btnIniciarJogo.innerHTML = "";
    loadingSpin.style.display = "flex";

    setTimeout(function() {
        window.location.href = "main.html";
    }, 2000)
}

