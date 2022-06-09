let extenso = document.querySelector("button");

extenso.onclick = function() {
    let num = parseInt(document.getElementById("num").value.padStart(1,'0'));

    console.log (num);

    if (num>=0 && num<=10){

        switch (num) {
            case 0:
                document.getElementById("resultado").innerHTML = "Zero.";
                break;
            case 1:
                document.querySelector("p").innerHTML = "Um.";
                break;
            case 2:
                document.querySelector("p").innerHTML = "Dois.";
                break;
            case 3:
                document.querySelector("p").innerHTML = "Três.";
                break;
            case 4:
                document.querySelector("p").innerHTML = "Quatro.";
                break;
            case 5:
                document.querySelector("p").innerHTML = "Cinco.";
                break;
            case 6:
                document.querySelector("p").innerHTML = "Seis.";
                break;
            case 7:
                document.querySelector("p").innerHTML = "Sete.";
                break;
            case 8:
                document.querySelector("p").innerHTML = "Oito.";
                break;
            case 9:
                document.querySelector("p").innerHTML = "Nove.";
                break;
            case 10:
                document.querySelector("p").innerHTML = "Dez.";
                break;
        }
    } else {
        document.querySelector("p").innerHTML = "Valor não é válido.";
    }
}