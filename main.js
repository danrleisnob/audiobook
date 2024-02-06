const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const audioCapitulo =document.getElementById('audio-capitulo');
const nomeCapitulo = document.getElementById('capitulo');
const like = document.getElementById('amei');
const imagem = document.getElementById('imgmidia');

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;
let asmei = 1;


function tocarFaixa () {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
};

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
};

function tocarOuPausar() {
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    } else{
        pausarFaixa();
        taTocando = 0;
    }
};

function trocarNomeDaFaixar(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

function trocarImagemDaFaixar() {
    imagem.src = `./images/${capituloAtual}.png`;
}

function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
    tocarFaixa();
    taTocando = 1;
    trocarNomeDaFaixar();
    trocarImagemDaFaixar();
};

function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
    tocarFaixa();
    taTocando = 1;
    trocarNomeDaFaixar();
    trocarImagemDaFaixar();
};

function midiaImagens() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }
    
    imagem.src = `./images/${capituloAtual}.png`;
    tocarFaixa();
    taTocando = 1;
    trocarNomeDaFaixar();
    trocarImagemDaFaixar();
}

function clickamei() {
    const asmei = document.getElementById('amei');

    if (asmei.classList.contains('bi-bookmark-heart-fill')) {
        asmei.classList.remove('bi-bookmark-heart-fill');
        asmei.classList.add('bi-bookmark-heart');
    } else {
        asmei.classList.remove('bi-bookmark-heart');
        asmei.classList.add('bi-bookmark-heart-fill');
    }
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
like.addEventListener('click', clickamei);