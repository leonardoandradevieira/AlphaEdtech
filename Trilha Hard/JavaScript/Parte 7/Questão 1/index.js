var selecao = document.querySelector('select');

selecao.addEventListener('change', (event) => {
    let modelos = document.querySelector('select').value;

    switch (modelos) {
        case "carro-1":
            document.getElementById("imagem-carro").src = "imagens/carro-1.jpg";
            document.getElementById("imagem-carro").alt = "Imagem do Jaguar F-type";
            document.getElementById("modelo").innerHTML = "Jaguar F-type";
            document.getElementById("fabricante").innerHTML = "Tata Motors";
            document.getElementById("velocidade").innerHTML = "250 km/h";
            document.getElementById("zero-cem").innerHTML = "5.7 segundos";
            document.getElementById("cavalos").innerHTML = "300 hp";
            document.getElementById("tanque").innerHTML = "63 L";
            break;
        case "carro-2":
            document.getElementById("imagem-carro").src = "imagens/carro-2.jpg";
            document.getElementById("imagem-carro").alt = "Imagem do Toyota Supra";
            document.getElementById("modelo").innerHTML = "Toyota Supra";
            document.getElementById("fabricante").innerHTML = "Toyota";
            document.getElementById("velocidade").innerHTML = "180 km/h";
            document.getElementById("zero-cem").innerHTML = "3.8 segundos";
            document.getElementById("cavalos").innerHTML = "382 hp";
            document.getElementById("tanque").innerHTML = "13.7 L";
            break;
        case "carro-3":
            document.getElementById("imagem-carro").src = "imagens/carro-3.jpg";
            document.getElementById("imagem-carro").alt = "Imagem do BMW Z4";
            document.getElementById("modelo").innerHTML = "BMW Z4";
            document.getElementById("fabricante").innerHTML = "BMW";
            document.getElementById("velocidade").innerHTML = "250 km/h";
            document.getElementById("zero-cem").innerHTML = "4.5 a 5.4 segundos";
            document.getElementById("cavalos").innerHTML = "258 a 340 hp";
            document.getElementById("tanque").innerHTML = "55 L";
            break;
        case "carro-4":
            document.getElementById("imagem-carro").src = "imagens/carro-4.jpg";
            document.getElementById("imagem-carro").alt = "Imagem do Audi TT";
            document.getElementById("modelo").innerHTML = "Audi TT";
            document.getElementById("fabricante").innerHTML = "Audi Hungaria Motor Kit";
            document.getElementById("velocidade").innerHTML = "250 km/h";
            document.getElementById("zero-cem").innerHTML = "6.7 segundos";
            document.getElementById("cavalos").innerHTML = "228 hp";
            document.getElementById("tanque").innerHTML = "65 L";
            break;
        case "carro-5":
            document.getElementById("imagem-carro").src = "imagens/carro-5.jpg";
            document.getElementById("imagem-carro").alt = "Imagem do Porsche Boxster";
            document.getElementById("modelo").innerHTML = "Porsche Boxster";
            document.getElementById("fabricante").innerHTML = "Grupo Volkswagen";
            document.getElementById("velocidade").innerHTML = "275 km/h";
            document.getElementById("zero-cem").innerHTML = "4.9 segundos";
            document.getElementById("cavalos").innerHTML = "394 hp";
            document.getElementById("tanque").innerHTML = "64 L";
            break;
        case "carro-6":
            document.getElementById("imagem-carro").src = "imagens/carro-6.jpg";
            document.getElementById("imagem-carro").alt = "Imagem do chevrolet corvette";
            document.getElementById("modelo").innerHTML = "chevrolet corvette";
            document.getElementById("fabricante").innerHTML = "General Motors";
            document.getElementById("velocidade").innerHTML = "246 km/h";
            document.getElementById("zero-cem").innerHTML = "2.6 segundos";
            document.getElementById("cavalos").innerHTML = "490 hp";
            document.getElementById("tanque").innerHTML = "84 L";
            break;
    }
});