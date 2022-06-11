let segundos;
let minutos;
let intervalo;
let segundosEnviados;
let segundosFaltando;

let ligar = document.getElementById("ligar-desligar");

let som = document.getElementById('alarme');
som.play();
som.pause();

function doisAlgoritmosSegundos(){
    if(segundos.toString().length < 2){
        document.getElementById("segundos-restantes").innerHTML = '0' + segundos;
    } else {
    document.getElementById("segundos-restantes").innerHTML = segundos;
    }
}

function doisAlgoritmosMinutos(){
    if(minutos.toString().length < 2){
        document.getElementById("minutos-restantes").innerHTML = '0' + minutos;
    } else {
    document.getElementById("minutos-restantes").innerHTML = minutos;
    }
}

function opcoes() {
    let opcoesMinutos = document.getElementById("minutos");
    for (let i = 0; i <= 59; i++) {
        opcoesMinutos.options[opcoesMinutos.options.length] = new Option(i, i);
    }
    let opcoesSegundos = document.getElementById("segundos");
    for (let i = 0; i <= 59; i++) {
        opcoesSegundos.options[opcoesSegundos.options.length] = new Option(i, i);
    }
};
opcoes();

function contagemSegundos() {
    doisAlgoritmosSegundos();
    if ( segundosFaltando <= 0.05*segundosEnviados ) {
        document.getElementById("cinco-porcento").style.visibility = "visible";
    }
    if (minutos === 0 && segundos === 0) {
        clearInterval(intervalo);
        som.play();
        som.loop = true;
        return false;
    }
    else {
        segundos--;
        segundosFaltando = minutos*60 + segundos;
        if (segundos < 0 ) {
            contagemMinutos();
        }
    }
};

function contagemMinutos() {
    segundos = 59;
    minutos--;
    doisAlgoritmosMinutos();
};

ligar.onclick = function () {
    let m = parseInt(document.getElementById("minutos").value);
    let s = parseInt(document.getElementById("segundos").value);

    minutos = m;
    segundos = s;

    segundosEnviados = m*60 + s;
    
    let valor = document.getElementById("ligar-desligar").value;

    if (valor === "1") {
        document.getElementById("ligar-desligar").innerHTML = "Desligar Alarme";
        document.getElementById("ligar-desligar").value = 2;
        valor = 2; 
        
        doisAlgoritmosMinutos();
        doisAlgoritmosSegundos();
        intervalo = setInterval(contagemSegundos, 1000);
    }
    else if (valor === "2") {
        document.getElementById("ligar-desligar").innerHTML = "Ligar Alarme";
        document.getElementById("ligar-desligar").value = 1;
        valor = 1;

        clearInterval(intervalo);
        som.pause();
    }
};