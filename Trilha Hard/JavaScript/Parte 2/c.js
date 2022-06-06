let comparar = document.querySelector("button");

comparar.onclick = function () {

    let dia = parseInt(document.getElementById("dia").value) + ((parseInt(document.getElementById("mes").value)) * 30.4167) + ((parseInt(document.getElementById("ano").value)) * 365.25);

    let hoje = new Date();

    let diaAtual = hoje.getDate() + (hoje.getMonth() + 1) * 30.4167 + (hoje.getFullYear()) * 365.25;

    let diasVida = diaAtual - dia;

    let genero = document.querySelector('input[name="genero"]:checked').value;

    console.log(diasVida);

    if (diaAtual < dia) {

        document.getElementById("resultado").innerHTML = "Espera! Você ainda não nasceu!";

    }

    else{

        if (genero == "M") {
            if (diasVida > 26699.78) {
                document.getElementById("resultado").innerHTML = "Estatisticamente, você já deveria ter morrido.";
            }
            else {
                let diasFaltando = 26699.78 - diasVida;

                document.getElementById("resultado").innerHTML = "Estatisticamente você ainda tem " + diasFaltando + "dias de vida. Aproveite bem!";
            }
        }

        else {
            if (diasVida > 29256.53) {
                document.getElementById("resultado").innerHTML = "Estatisticamente, você já deveria ter morrido.";
            }
            else {
                let diasFaltando = 29256.53 - diasVida;

                document.getElementById("resultado").innerHTML = "Estatisticamente você ainda tem " + diasFaltando + " dias de vida. Aproveite bem!";
            }
        }

    }

};