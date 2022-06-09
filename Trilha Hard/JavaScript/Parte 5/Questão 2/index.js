let confirmar = document.querySelector("button");

confirmar.onclick = function () {
    let data = new Date(document.querySelector('input').value);

    let dia = data.getDate() + 1;
    document.getElementById("dia").innerHTML = "Dia: " + dia;

    let mes = data.getMonth() + 1;
    document.getElementById("mes").innerHTML = "Mês: " + mes;

    let ano = data.getFullYear();
    document.getElementById("ano").innerHTML = "Ano: " + ano;

    let semana = data.getDay();
    switch (semana) {
        case 0:
            document.getElementById("semana").innerHTML = "Dia da semana: Segunda";
            break;
        case 1:
            document.getElementById("semana").innerHTML = "Dia da semana: Terça";
            break;
        case 2:
            document.getElementById("semana").innerHTML = "Dia da semana: Quarta";
            break;
        case 3:
            document.getElementById("semana").innerHTML = "Dia da semana: Quinta";
            break;
        case 4:
            document.getElementById("semana").innerHTML = "Dia da semana: Sexta";
            break;
        case 5:
            document.getElementById("semana").innerHTML = "Dia da semana: Sábado";
            break;
        case 6:
            document.getElementById("semana").innerHTML = "Dia da semana: Domingo";
            break;
    }

    switch (mes) {
        case 1:
            document.getElementById("mes-extenso").innerHTML = "Mês(extenso): Janeiro";
            break;
        case 2:
            document.getElementById("mes-extenso").innerHTML = "Mês(extenso): Fevereiro";
            break;
        case 3:
            document.getElementById("mes-extenso").innerHTML = "Mês(extenso): Março";
            break;
        case 4:
            document.getElementById("mes-extenso").innerHTML = "Mês(extenso): Abril";
            break;
        case 5:
            document.getElementById("mes-extenso").innerHTML = "Mês(extenso): Maio";
            break;
        case 6:
            document.getElementById("mes-extenso").innerHTML = "Mês(extenso): Junho";
            break;
        case 7:
            document.getElementById("mes-extenso").innerHTML = "Mês(extenso): Julho";
            break;
        case 8:
            document.getElementById("mes-extenso").innerHTML = "Mês(extenso): Agosto";
            break;
        case 9:
            document.getElementById("mes-extenso").innerHTML = "Mês(extenso): Setembro";
            break;
        case 10:
            document.getElementById("mes-extenso").innerHTML = "Mês(extenso): Outubro";
            break;
        case 11:
            document.getElementById("mes-extenso").innerHTML = "Mês(extenso): Novembro";
            break;
        case 12:
            document.getElementById("mes-extenso").innerHTML = "Mês(extenso): Dezembro";
            break;
    }

    let segundos = data.getTime();
    document.getElementById("milissegundo").innerHTML = "Milissegundos: " + segundos;
}


