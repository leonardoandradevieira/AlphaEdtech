let comparar = document.querySelector("button");

comparar.onclick = function() {

    let num1 = document.getElementById("num1").value.padStart(1,'0');
    let num2 = document.getElementById("num2").value.padStart(1,'0'); 

    if ( num1 > num2 ) {
        document.getElementById("resultado").innerHTML = "O 1º número é maior que o 2º número.",
        document.getElementById("resultado-2").innerHTML = num1 + " > " + num2;
    }

    else if ( num2 > num1 ) {
        document.getElementById("resultado").innerHTML = "O 1º número é menor que o 2º número.",
        document.getElementById("resultado-2").innerHTML = num1 + " < " + num2;
    }

    else {
        document.getElementById("resultado").innerHTML = "O 1º número é igual ao 2º número.",
        document.getElementById("resultado-2").innerHTML = num1 + " = " + num2;
    }

};