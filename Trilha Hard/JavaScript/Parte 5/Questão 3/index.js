let confirmar = document.querySelector("button");

confirmar.onclick = function () {
    let produtos = document.querySelector("select").value;
    console.log(produtos);
    
    switch (produtos) {
        case "primeiro":
            document.querySelector("h2").innerHTML = "Produto 1";
            document.getElementById("descricao").innerHTML = "Detalhes do Produto 1.";
            document.getElementById("produto").src = "imagens/produto-1.webp";
            break;
        case "segundo":
            document.querySelector("h2").innerHTML = "Produto 2";
            document.getElementById("descricao").innerHTML = "Detalhes do Produto 2.";
            document.getElementById("produto").src = "imagens/produto-2.webp";
            break;
        case "terceiro":
            document.querySelector("h2").innerHTML = "Produto 3";
            document.getElementById("descricao").innerHTML = "Detalhes do Produto 3.";
            document.getElementById("produto").src = "imagens/produto-3.webp";
            break;
        case "quarto":
            document.querySelector("h2").innerHTML = "Produto 4";
            document.getElementById("descricao").innerHTML = "Detalhes do Produto 4.";
            document.getElementById("produto").src = "imagens/produto-4.webp";
            break;
        case "quinto":
            document.querySelector("h2").innerHTML = "Produto 5";
            document.getElementById("descricao").innerHTML = "Detalhes do Produto 5.";
            document.getElementById("produto").src = "imagens/produto-5.webp";
            break;
    }
}


