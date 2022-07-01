const addButton = document.getElementById("add-product");
const editButton = document.getElementById("edit-product");
const listButton = document.getElementById("list-product");
let arr = new Array();
let productId = parseInt(0);
let productName;
let productDescription;
let productValor;
let inclusionDate;
const table = document.querySelector("table");
const editTitle = document.querySelector("h2");
const listTitle = document.querySelector("h3");
const searchDiv = document.getElementById("search");
const addedP = document.getElementById("added-product");
editTitle.innerHTML = "";

addButton.addEventListener("click", addFunction);
listButton.addEventListener("click", listFunction);

// FUNÇÃO ADICIONA PRODUTOS AO ARRAY LENDO OS INPUTS DO FORMS
function addFunction() {
    productName = document.getElementById("name").value;
    productDescription = document.getElementById("description").value;
    productValor = document.getElementById("valor").value;
    inclusionDate = Date.now();

    arr[productId] = {
        id: productId,
        name: productName,
        description: productDescription,
        valor: productValor,
        date: inclusionDate,
    };

    addedP.innerHTML = "Produto " + (arr[productId].name) + " adicionado.";
    productId += 1;

    document.getElementById("name").value = '';
    document.getElementById("description").value = '';
    document.getElementById("valor").value = '';
};

function listFunction() {
    // ZERA A TABELA PARA MOSTRAR OS PPRODUTOS DO ARRAY E ADICIONA LINHA COM TÍTULOS
    addedP.innerHTML = "";
    listTitle.innerHTML = "LISTA DE PRODUTOS";

    searchDiv.innerHTML = `
    <label for="search-bar">Pesquisar</label>
    <input type="text" id="search-bar" name="search-bar">

    <button type="button" id="search-button">Pesquisar</button>`;

    table.innerHTML = `<tr id="list-title">
    <th>ID</th>
    <th id="name-orderer">NOME</th>
    <th id="value-orderer">VALOR</th>
    <th>EDITAR</th>
    <th>APAGAR</th>
    </tr>`;

    // ADICIONA OS PRODUTOS QUE ESTÃO NO ARRAY
    let i = 0;
    for (i=0; i < arr.length; i++) {

    let newRow = document.createElement("tr");
    newRow;
    newRow.id = "product-" + i;

    let newColumnId = document.createElement("td");
    newColumnId.innerHTML = arr[i].id;
    newRow.appendChild(newColumnId);

    let newColumnName = document.createElement("td");
    newColumnName.innerHTML = arr[i].name;
    newColumnName.id = 'product-name';
    newRow.appendChild(newColumnName);

    // EVENTO PARA MOSTRAR OS DADOS ESCONDIDOS
    newColumnName.setAttribute('onclick', `showInfo(${i})`);
    
    let newColumnValor = document.createElement("td");
    newColumnValor.innerHTML = parseFloat(arr[i].valor).toFixed(2);
    newRow.appendChild(newColumnValor);

    let newColumnEdit = document.createElement("td");
    newColumnEdit.innerHTML = "editar";
    newColumnName.id = 'product-edit';
    newRow.appendChild(newColumnEdit);
    
    // EVENTO PARA EDITAR INFORMAÇÕES
    newColumnEdit.setAttribute('onclick', `editInfo(${i})`);

    let newColumnDelete = document.createElement("td");
    newColumnDelete.innerHTML = "apagar";
    newColumnName.id = 'product-delete';
    newRow.appendChild(newColumnDelete);

    // EVENTO PARA APAGAR PRODUTOS DA LISTA
    newColumnDelete.setAttribute('onclick', `deleteInfo(${i})`);

    // ESCONDIDOS
    let newColumnDescription = document.createElement("p"); 
    newColumnDescription.innerHTML = "Descrição: " + arr[i].description;
    newColumnDescription.id = "description-" + i;
    newRow.appendChild(newColumnDescription); 

    let newColumnDate = document.createElement("p"); 
    columnDate = new Date(arr[i].date);
    let newDate = columnDate.getDate() + "/" + columnDate.getMonth() + "/" + columnDate.getFullYear() + " - " + columnDate.getHours() + ":" + columnDate.getMinutes() + ":" + columnDate.getSeconds();
    newColumnDate.id = "date-" + i;
    newColumnDate.innerHTML = "Incluído em: " + newDate;
    newRow.appendChild(newColumnDate);

    let nameOrderer = document.getElementById("name-orderer");
    let valueOrderer = document.getElementById("value-orderer");
    // EVENTO PARA ORDENAR POR NOME
    nameOrderer.setAttribute('onclick', `nameOrder(${i.name})`);
    // EVENTO PARA ORDENAR POR VALOR
    valueOrderer.setAttribute('onclick', `valueOrder(${i.value})`);
    
    // EVENTO PARA PESQUISA
    let searchButton = document.getElementById("search-button");
    searchButton.setAttribute('onclick', `search()`);

    table.appendChild(newRow);
    };
};

// MOSTRA OS DADOS DE DESCRIÇÃO E DATA
function showInfo(i) {
    listFunction(arr);

    let newColumnDescription = document.getElementById("description-" + i);
    let newColumnDate = document.getElementById("date-" + i);
    newColumnDescription.style.visibility = "visible";
    newColumnDate.style.visibility = "visible";
};

 // FUNÇÃO PARA EDITAR PRODUTO
function editInfo(i) {
    addedP.innerHTML = "";
    editTitle.innerHTML = "Edite o produto " + arr[i].name;
    addButton.style.display = "none";
    editButton.style.display = "flex";

    document.getElementById("name").value = arr[i].name;
    document.getElementById("description").value = arr[i].description;
    document.getElementById("valor").value = arr[i].valor;

    editButton.setAttribute('onclick', `editClicked(${i})`);

};

// CONTINUAÇÃO EDITAR PRODUTO
function editClicked(i) {
    productName = document.getElementById("name").value;
    productDescription = document.getElementById("description").value;
    productValor = document.getElementById("valor").value;
    
    arr[i].name = productName;
    arr[i].description = productDescription;
    arr[i].valor = productValor;

    addedP.innerHTML = "Produto " + (arr[i].name) + " editado.";
    editTitle.innerHTML = "";  
    addButton.style.display = "flex";
    editButton.style.display = "none";  

    document.getElementById("name").value = '';
    document.getElementById("description").value = '';
    document.getElementById("valor").value = '';

    listFunction(arr);
};

 // FUNÇÃO PARA APAGAR PRODUTO
function deleteInfo(i) {
    addedP.innerHTML = "";

    arr.splice(i,1);
    
    // ATUALIZA OS IDS DE TODOS OS PRODUTOS PARA QUE FIQUEM SEQUENCIAIS
    j=0;
    for (j=0; j<arr.length; j++){
    arr[j].id = parseInt(j); 
    };

    // ATUALIZA A LISTA DE PRODUTOS
    listFunction(arr);
    // ATUALIZA O VALOR DO ID PARA ADIÇÃO DE NOVOS PRODUTOS PARA O PRÓXIMO ID DISPONÍVEL
    productId = arr.length;
};

// ORDENADORES NOME VALOR
function nameOrder(a,b) {
    let tempArr = arr.sort((a,b) => {
        if(a.name < b.name) return -1;
        return 1;
    });
    arr = tempArr;
    listFunction(arr);
};
function valueOrder(a,b) {
    let tempArr = arr.sort((a,b) => {
        if(a.valor < b.valor) return -1;
        return 1;
    });
    arr = tempArr;
    listFunction(arr);
};

// PESQUISA
function search() {
    let searchInput = document.getElementById("search-bar").value;
    let filteredSearch = filter(searchInput);

    if (searchInput == "") {
        listFunction(arr);
    };

    if (filteredSearch.length == 0) {
        alert(`Não foram encontrados produtos conforme chave de pesquisa!`);
    } else {
        listFiltered(filteredSearch);
        alert(`Foram encontrado(s) ${filteredSearch.length} produtos.`);
    };
};

function filter(searchInput) {
    return arr.filter(function(el) {
        return el.name.toString().toLowerCase().indexOf(searchInput.toLowerCase()) > -1 || el.description.toString().toLowerCase().indexOf(searchInput.toLowerCase()) > -1
    });
};

function listFiltered(filteredSearch) {
    // ZERA A TABELA PARA MOSTRAR OS PPRODUTOS DO ARRAY E ADICIONA LINHA COM TÍTULOS
    addedP.innerHTML = "";
    listTitle.innerHTML = "LISTA DE PRODUTOS";

    searchDiv.innerHTML = `
    <label for="search-bar">Pesquisar</label>
    <input type="text" id="search-bar" name="search-bar">

    <button type="button" id="search-button">Pesquisar</button>`;

    table.innerHTML = `<tr id="list-title">
    <th>ID</th>
    <th id="name-orderer">NOME</th>
    <th id="value-orderer">VALOR</th>
    <th>EDITAR</th>
    <th>APAGAR</th>
    </tr>`;

    // ADICIONA OS PRODUTOS QUE ESTÃO NO ARRAY
    let i = 0;
    for (i=0; i < filteredSearch.length; i++) {

    let newRow = document.createElement("tr");
    newRow;
    newRow.id = "product-" + i;

    let newColumnId = document.createElement("td");
    newColumnId.innerHTML = filteredSearch[i].id;
    newRow.appendChild(newColumnId);

    let newColumnName = document.createElement("td");
    newColumnName.innerHTML = filteredSearch[i].name;
    newColumnName.id = 'product-name';
    newRow.appendChild(newColumnName);

    // EVENTO PARA MOSTRAR OS DADOS ESCONDIDOS
    newColumnName.setAttribute('onclick', `showInfo(${i})`);
    
    let newColumnValor = document.createElement("td");
    newColumnValor.innerHTML = parseFloat(filteredSearch[i].valor).toFixed(2);
    newRow.appendChild(newColumnValor);

    let newColumnEdit = document.createElement("td");
    newColumnEdit.innerHTML = "editar";
    newColumnName.id = 'product-edit';
    newRow.appendChild(newColumnEdit);
    
    // EVENTO PARA EDITAR INFORMAÇÕES
    newColumnEdit.setAttribute('onclick', `editInfo(${i})`);

    let newColumnDelete = document.createElement("td");
    newColumnDelete.innerHTML = "apagar";
    newColumnName.id = 'product-delete';
    newRow.appendChild(newColumnDelete);

    // EVENTO PARA APAGAR PRODUTOS DA LISTA
    newColumnDelete.setAttribute('onclick', `deleteInfo(${i})`);

    // ESCONDIDOS
    let newColumnDescription = document.createElement("p"); 
    newColumnDescription.innerHTML = "Descrição: " + filteredSearch[i].description;
    newColumnDescription.id = "description-" + i;
    newRow.appendChild(newColumnDescription); 

    let newColumnDate = document.createElement("p"); 
    columnDate = new Date(filteredSearch[i].date);
    let newDate = columnDate.getDate() + "/" + columnDate.getMonth() + "/" + columnDate.getFullYear() + " - " + columnDate.getHours() + ":" + columnDate.getMinutes() + ":" + columnDate.getSeconds();
    newColumnDate.id = "date-" + i;
    newColumnDate.innerHTML = "Incluído em: " + newDate;
    newRow.appendChild(newColumnDate);

    let nameOrderer = document.getElementById("name-orderer");
    let valueOrderer = document.getElementById("value-orderer");
    // EVENTO PARA ORDENAR POR NOME
    nameOrderer.setAttribute('onclick', `nameOrder(${i.name})`);
    // EVENTO PARA ORDENAR POR VALOR
    valueOrderer.setAttribute('onclick', `valueOrder(${i.value})`);
    
    // EVENTO PARA PESQUISA
    let searchButton = document.getElementById("search-button");
    searchButton.setAttribute('onclick', `search()`);

    table.appendChild(newRow);
    };
};

//ERROS ou VALIDAÇÃO