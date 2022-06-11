let bomba = document.getElementById('bomba');

window.onload = function() {
    var y = Math.floor(Math.random()* (80 - 10) + 10);
    document.getElementById('bomba-acesa').style.top = y + 'vh';
    var x = Math.floor(Math.random()* (80 - 0) + 0);
    document.getElementById('bomba-acesa').style.left = x + 'vw';
};

var segundos = 60;

for (let i =0; i<1; i++) {
    var tique = setInterval( function() {
    segundos = segundos - 1;
    document.querySelector('span').innerHTML = segundos;
    document.getElementById('som-tique').currentTime = 0;
    document.getElementById('som-tique').play();
    }, "1000");
};

var som = document.getElementById('som-explosao');

const explosao = setTimeout(() => {
    document.getElementById('explosao').style.visibility = 'visible';
    document.getElementById('bomba-acesa').style.visibility = 'hidden';
    document.querySelector('header').style.visibility = 'hidden';
    clearInterval(tique);
    som.play();
}, 60000);

bomba.onclick = function() {
    clearTimeout(explosao);
    clearInterval(tique);

    document.getElementById('fogo').style.display = 'none';

    document.getElementById('parabens').style.visibility = 'visible';
};