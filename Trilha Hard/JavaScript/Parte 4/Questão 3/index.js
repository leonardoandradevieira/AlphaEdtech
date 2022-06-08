let sortear = document.querySelector("button");

sortear.onclick = function() {
    let num = document.getElementById("num").value.padStart(1,'0').replace(',', '.');

    if (isNaN(num)){
        document.getElementById("resultado").innerHTML = "O valor digitado não é um número.";

    } else {
        num = parseFloat(num);
        
        if (Number.isInteger(num)) {
            document.getElementById("resultado").innerHTML = "O valor digitado é inteiro, digite um valor não inteiro.";
        } else {
            let menorInteiro = Math.floor(num);
            let maiorInteiro = Math.ceil(num);

            document.getElementById("resultado").innerHTML = "O menor número inteiro é " + menorInteiro + "." + "<br>" + "O maior número inteiro é " + maiorInteiro + ".";
        }
    }
}