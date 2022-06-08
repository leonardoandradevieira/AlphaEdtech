let calcular = document.querySelector("button");

calcular.onclick = function() {
    let peso = parseFloat(document.getElementById("peso").value.padStart(1,'0').replace(',', '.'));
    let altura = parseFloat(document.getElementById("altura").value.padStart(1,'0').replace(',', '.'));

    let imc = (peso / (altura*altura)).toFixed(2);

    if (isNaN(imc) || altura === 0){
        document.getElementById("resultado").innerHTML = "Os valores inseridos não são válidos.";
    } else if (imc<18.5) {
        document.getElementById("resultado").innerHTML ="IMC = " + imc + ", você está abaixo do peso.";
    } else if (imc>=18.5 && imc<25) {
        document.getElementById("resultado").innerHTML ="IMC = " + imc + ", seu peso está normal.";
    } else if (imc>=25 && imc<29.9) {
        document.getElementById("resultado").innerHTML ="IMC = " + imc + ", você está com sobrepeso.";
    } else if (imc>=29.9) {
        document.getElementById("resultado").innerHTML ="IMC = " + imc + ", você está com obesidade.";
    }
}