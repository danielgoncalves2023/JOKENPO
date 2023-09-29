var opcoes = ['papel', 'pedra', 'tesoura'];
var slidesRandom = document.getElementById('slides');
// Endereços das imagens de pedra, papel, tesoura e interrogação para DOM
var slides = ["assets/image/papel.png", "assets/image/pedra.png", "assets/image/tesoura.png"];
var interrogacao = ["assets/image/interrogacao.webp"];
// Mensagens de venceu, perdeu e empatou
var win = ["Você é um sortudo! A vitória é sua!", "Você fez isso! Você é o mestre da sorte!", "Incrível! A sorte sorriu para você hoje!", "Você venceu! Está sentindo a sorte ao seu lado?"];
var draw = ["Ninguém saiu vitorioso, mas pelo menos ninguém saiu derrotado também!", "Ninguém sai perdendo quando é um empate! É um resultado justo.", "Ninguém é um perdedor aqui. Empatou!", "Parece que a sorte gosta de manter as coisas equilibradas. Empate!"];
var lose = ["Parece que a sorte não estava do seu lado desta vez. Tente novamente!", "Hmmm... você não ganhou desta vez, mas a diversão continua!", "Oh, azar! Melhor sorte da próxima vez.", "Parece que as estrelas não estavam alinhadas para você hoje. Mas continue tentando!", "Não foi dessa vez, mas não desanime. A próxima partida pode ser a sua!"];
// Variáveis para contador de vitória e derrotas
var contadorVitorias = document.getElementById('contador-vitorias');
var contadorDerrotas = document.getElementById('contador-derrotas');
var contadorEmpates = document.getElementById('contador-empates');
var vitorias = 0;
var derrotas = 0;
var empates = 0;
// Variáveis img pedra, papel e tesoura
var pedra = document.getElementById('pedra');
var papel = document.getElementById('papel');
var tesoura = document.getElementById('tesoura');
// Variável botão resetar jogo
var botaoReset = document.getElementById('botaoReiniciar');
// Variável textos do jogo
var escolhaAdversario = document.getElementById('escolhaAdversario');
var textoResultado = document.getElementById('resultado');
var textoEscolha = document.getElementById('texto_escolha');

// Função da escolha (versus) resultado
function result(escolha) {
    var loadingSpin = document.getElementById('loadingSpin')
    loadingSpin.style.display = "flex";
    textoEscolha.innerHTML = "Aguardando seu oponente..."
    pedra.style.display = "none";
    tesoura.style.display = "none";
    papel.style.display = "none";

    setTimeout(function() {
        var resultado = opcoes[Math.floor(Math.random() * 2.99)];
        var mensagemWin = `VITÓRIA! ${win[Math.floor(Math.random() * 3.99)]}`;
        var mensagemDraw = `EMPATE: ${draw[Math.floor(Math.random() * 3.99)]}`;
        var mensagemLose = `PERDEU... ${lose[Math.floor(Math.random() * 4.99)]}`;
        slidesRandom.setAttribute('src', slides[opcoes.indexOf(resultado)]);
        botaoReset.style.display = "flex";

        if (escolha == 'papel') {
            pedra.style.display = "none";
            tesoura.style.display = "none";
            papel.style.display = "flex";
            papel.style.width = "40%";
    
            if (resultado == 'papel') {
                textoResultado.innerText = mensagemDraw;
                empates += 1;
                contadorEmpates.innerHTML = empates;
            } else if (resultado == 'pedra') {
                textoResultado.innerText = mensagemWin;
                vitorias += 1;
                contadorVitorias.innerHTML = vitorias;
            } else if (resultado == 'tesoura') {
                textoResultado.innerText = mensagemLose;
                derrotas += 1;
                contadorDerrotas.innerHTML = derrotas;
            }
        } else if (escolha == 'pedra') {
            papel.style.display = "none";
            tesoura.style.display = "none";
            pedra.style.display = "flex";
            pedra.style.width = "40%";
    
            if (resultado == 'pedra') {
                textoResultado.innerText = mensagemDraw;
                empates += 1;
                contadorEmpates.innerHTML = empates;
            } else if (resultado == 'tesoura') {
                textoResultado.innerText = mensagemWin;
                vitorias += 1;
                contadorVitorias.innerHTML = vitorias;
            } else if (resultado == 'papel') {
                textoResultado.innerText = mensagemLose;
                derrotas += 1;
                contadorDerrotas.innerHTML = derrotas;
            }
        } else if (escolha == 'tesoura') {
            pedra.style.display = "none";
            papel.style.display = "none";
            tesoura.style.display = "flex";
            tesoura.style.width = "40%";
    
            if (resultado == 'tesoura') {
                textoResultado.innerText = mensagemDraw;
                empates += 1;
                contadorEmpates.innerHTML = empates;
            } else if (resultado == 'papel') {
                textoResultado.innerText = mensagemWin;
                vitorias += 1;
                contadorVitorias.innerHTML = vitorias;
            } else if (resultado == 'pedra') {
                textoResultado.innerText = mensagemLose;
                derrotas += 1;
                contadorDerrotas.innerHTML = derrotas;
            }
        }
    
        loadingSpin.style.display = "none";
        textoEscolha.innerHTML = "Você escolheu:"
        escolhaAdversario.innerHTML = 'O seu oponente escolheu:';
        pedra.removeAttribute('onclick');
        papel.removeAttribute('onclick');
        tesoura.removeAttribute('onclick');
    }, 2000)
}

// Reseta funções iniciais do jogo
function jogarNovamente() {
    setTimeout(function() {
    // Redefine os atributos de eventos
    pedra.setAttribute('onclick', 'result("pedra")');
    papel.setAttribute('onclick', 'result("papel")');
    tesoura.setAttribute('onclick', 'result("tesoura")');
    // Redefine os elementos para o estado inicial
    pedra.style.display = "flex";
    tesoura.style.display = "flex";
    papel.style.display = "flex";
    papel.style.width = "100%";
    pedra.style.width = "100%";
    tesoura.style.width = "100%";
    // Limpa as mensagens anteriores
    escolhaAdversario.innerHTML = " ";
    textoResultado.innerHTML = "VERSUS";
    textoEscolha.innerHTML = "Escolha a sua opção!";
    // Retorna imagem inicial no local de escolha do oponente
    slidesRandom.setAttribute('src', 'assets/image/interrogacao.webp');
    // Faz botão Jogar Novamente desaparecer
    botaoReset.style.display = "none";
    }, 500)
}

// Reseta contadores da tabela
function resetContador() {
    vitorias = 0;
    derrotas = 0;
    empates = 0;
    contadorVitorias.innerHTML = vitorias;
    contadorDerrotas.innerHTML = derrotas;
    contadorEmpates.innerHTML = empates;
}

document.getElementById('resetContador').addEventListener("click", resetContador);