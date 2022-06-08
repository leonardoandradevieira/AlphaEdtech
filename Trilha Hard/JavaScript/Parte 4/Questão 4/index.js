let sortear = document.querySelector("button");

sortear.onclick = function() {
    const pessoa = Math.floor(Math.random() * (1000-1+1)) + 1;

    if (pessoa < 518) {
        document.getElementById("resultado-genero").innerHTML = "Gênero: mulher.";
        if (pessoa < 86) {
            document.getElementById("resultado-idade").innerHTML = "Idade: idoso.";
        } else {
            document.getElementById("resultado-idade").innerHTML = "Idade: não idoso.";
        }
    } else {
        document.getElementById("resultado-genero").innerHTML ="Gênero: homem.";
        if (pessoa < 600) {
            document.getElementById("resultado-idade").innerHTML = "Idade: idoso.";
        } else {
            document.getElementById("resultado-idade").innerHTML = "Idade: não idoso.";
        }
    }
};