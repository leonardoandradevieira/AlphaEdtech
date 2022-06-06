let calcular = document.querySelector("button");

calcular.onclick = function() {
    
    let num1 = parseInt(document.getElementById("num1").value.padStart(1,'0'));
    let num2 = parseInt(document.getElementById("num2").value.padStart(1,'0')); 
    let operador = document.getElementById("operador").value; 

    switch(operador){

        case "soma":
            let soma = num1 + num2;
            document.getElementById("resultado").innerHTML = "O 1º número mais o 2º número é igual a " + soma + ".";
            document.getElementById("resultado-2").innerHTML = num1 + " + " + num2 + " = " + soma;
            console.log(soma);
            break;
        case "subtracao":
            let subtracao = num1 - num2;
            document.getElementById("resultado").innerHTML = "O 1º número menos o 2º número é igual a " + subtracao + ".";
            document.getElementById("resultado-2").innerHTML = num1 + " - " + num2 + " = " + subtracao;
            console.log(subtracao);
            break;
        case "multiplicacao":
            let multiplicacao = num1 * num2;
            document.getElementById("resultado").innerHTML = "O 1º número vezes o 2º número é igual a " + multiplicacao + ".";
            document.getElementById("resultado-2").innerHTML = num1 + " * " + num2 + " = " + multiplicacao;
            console.log(multiplicacao);
            break;
        case "divisao":
            let divisao = num1 / num2;
            if (num2 === 0) {
                document.getElementById("resultado").innerHTML = "O 1º número dividido pelo 2º número é indeterminado.";
                document.getElementById("resultado-2").innerHTML = num1 + " / " + num2 + " = indeterminado.";
                console.log("indeterminado");
            }
            else {
                document.getElementById("resultado").innerHTML = "O 1º número dividido pelo 2º número é igual a " + divisao + ".";
                document.getElementById("resultado-2").innerHTML = num1 + " / " + num2 + " = " + divisao;
                console.log(divisao);
            }
            break;
    }
}