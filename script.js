var opcoes = ['papel', 'pedra', 'tesoura'];
var slidesRandom = document.getElementById('slides');
// Endereços das imagens de pedra, papel e tesoura para DOM
var slides = ["assets/image/papel.png", "assets/image/pedra.png", "assets/image/tesoura.png"];
// Mensagens de venceu, perdeu e empatou
const win = ["Você é um sortudo! A vitória é sua!", "Você fez isso! Você é o mestre da sorte!", "Incrível! A sorte sorriu para você hoje!", "Você venceu! Está sentindo a sorte ao seu lado?"];
const draw = ["Ninguém saiu vitorioso, mas pelo menos ninguém saiu derrotado também!", "Ninguém sai perdendo quando é um empate! É um resultado justo.", "Ninguém é um perdedor aqui. Empatou!", "Parece que a sorte gosta de manter as coisas equilibradas. Empate!"];
const lose = ["Parece que a sorte não estava do seu lado desta vez. Tente novamente!", "Hmmm... você não ganhou desta vez, mas a diversão continua!", "Oh, azar! Melhor sorte da próxima vez.", "Parece que as estrelas não estavam alinhadas para você hoje. Mas continue tentando!", "Não foi dessa vez, mas não desanime. A próxima partida pode ser a sua!"];
// Variáveis para contador de vitória e derrotas
const contadorVitorias = document.getElementById('contador-vitorias');
const contadorDerrotas = document.getElementById('contador-derrotas');
const contadorEmpates = document.getElementById('contador-empates');
var vitorias = 0;
var derrotas = 0;
var empates = 0;

// Função da escolha x resultado
function result(escolha) {
    var resultado = opcoes[Math.round(Math.random() * 2)];
    var randomResultado = document.getElementById('resultado');
    slidesRandom.setAttribute('src', slides[opcoes.indexOf(resultado)]);

    if (escolha == 'papel') {
        if (resultado == 'papel') {
            randomResultado.innerText = (`EMPATE: ${draw[Math.round(Math.random() * 3)]}`);
            empates += 1;
            contadorEmpates.innerHTML = empates;
        } else if (resultado == 'pedra') {
            randomResultado.innerText = (`VITÓRIA! ${win[Math.round(Math.random() * 3)]}`);
            vitorias += 1;
            contadorVitorias.innerHTML = empates;
        } else if (resultado == 'tesoura') {
            randomResultado.innerText = (`PERDEU... ${lose[Math.round(Math.random() * 4)]}`);
            derrotas += 1;
            contadorDerrotas.innerHTML = derrotas;
        }
    } else if (escolha == 'pedra') {
        if (resultado == 'pedra') {
            randomResultado.innerText = (`EMPATE: ${draw[Math.round(Math.random() * 3)]}`);
            empates += 1;
            contadorEmpates.innerHTML = empates;
        } else if (resultado == 'tesoura') {
            randomResultado.innerText = (`VITÓRIA! ${win[Math.round(Math.random() * 3)]}`);
            vitorias += 1;
            contadorVitorias.innerHTML = vitorias;
        } else if (resultado == 'papel') {
            randomResultado.innerText = (`PERDEU... ${lose[Math.round(Math.random() * 4)]}`);
            derrotas += 1;
            contadorDerrotas.innerHTML = derrotas;
        }
    } else if (escolha == 'tesoura') {
        if (resultado == 'tesoura') {
            randomResultado.innerText = (`EMPATE: ${draw[Math.round(Math.random() * 3)]}`);
            empates += 1;
            contadorEmpates.innerHTML = empates;
        } else if (resultado == 'papel') {
            randomResultado.innerText = (`VITÓRIA! ${win[Math.round(Math.random() * 3)]}`);
            vitorias += 1;
            contadorVitorias.innerHTML = vitorias;
        } else if (resultado == 'pedra') {
            randomResultado.innerText = (`PERDEU... ${lose[Math.round(Math.random() * 4)]}`);
            derrotas += 1;
            contadorDerrotas.innerHTML = derrotas;
        }
    }
    let node = document.createElement("p")
    let resultadoOponente = document.createTextNode("O Seu oponente escolheu:")
    node.appendChild(resultadoOponente);
    randomResultado.appendChild(node);
}

function resetContador() {
    vitorias = 0;
    derrotas = 0;
    empates = 0;
    contadorVitorias.innerHTML = vitorias;
    contadorDerrotas.innerHTML = derrotas;
    contadorEmpates.innerHTML = empates;

}

document.getElementById('resetContador').addEventListener("click", resetContador);


