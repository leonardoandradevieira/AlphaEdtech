let bomba = document.getElementById('bomba');

window.onload = function() {
    var y = Math.floor(Math.random()* (80 - 10) + 10);
    document.getElementById('bomba-acesa').style.top = y + 'vh';
    var x = Math.floor(Math.random()* (80 - 0) + 0);
    document.getElementById('bomba-acesa').style.left = x + 'vw';
}

let som = document.getElementById('som-explosao');
som.play();
som.pause();

const explosao = setTimeout(() => {
    document.getElementById('explosao').style.visibility = 'visible';
    document.getElementById('bomba-acesa').style.visibility = 'hidden';
    document.querySelector('h1').style.visibility = 'hidden';
    som.play();
}, 10000);

bomba.onclick = function() {
    clearTimeout(explosao);

    document.getElementById('fogo').style.display = 'none';

    document.getElementById('parabens').style.visibility = 'visible';
};