let comparar = document.querySelector("button");

comparar.onclick = function() {

    let texto1 = document.getElementById("texto-1").value;
    let texto2 = document.getElementById("texto-2").value; 

    if ( texto1.length > texto2.length ) {
        document.getElementById("resultado").innerHTML = "A 1º string é maior que a 2º string.";
    }

    else if ( texto2.length > texto1.length ) {
        document.getElementById("resultado").innerHTML = "A 1º string é menor que a 2º string.";
    }

    else {
        document.getElementById("resultado").innerHTML = "A 1º string tem tamanho igual ao da 2º string.";
    }

};