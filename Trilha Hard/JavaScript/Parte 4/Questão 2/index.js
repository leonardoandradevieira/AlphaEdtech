let sortear = document.querySelector("button");

sortear.onclick = function() {
    let min = parseInt(document.getElementById("min").value.padStart(1,'0'));
    let max = parseInt(document.getElementById("max").value.padStart(1,'0'));

    const aleatorio = Math.floor(Math.random() * (max-min+1)) + min;

    if (isNaN(min) || isNaN(max)){
        document.getElementById("resultado").innerHTML = "Os valores inseridos não são válidos.";
    } else if (min > max) {
        document.getElementById("resultado").innerHTML = "O valor mínimo é maior que o máximo, não é possível sortear.";
    } else {
        document.getElementById("resultado").innerHTML = aleatorio;
    }
}