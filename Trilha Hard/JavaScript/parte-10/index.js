let addButton = document.getElementById("add-product");
let editButton = document.getElementById("edit-product");
let listButton = document.getElementById("list-product");
let arr = new Array();
let productId = parseInt(0);
let productName;
let productDescription;
let productValor;
let inclusionDate;
let table = document.querySelector("table");
let editTitle = document.querySelector("h2");
let addedP = document.getElementById("added-product");
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

    table.innerHTML = `<tr id="list-title">
    <th>ID</th>
    <th>NOME</th>
    <th>VALOR</th>
    <th>EDITAR</th>
    <th>APAGAR</th>
    </tr>`;

    // ADICIONA OS PRODUTOS QUE ESTÃO NO ARRAY
    let i = 0;
    while (i < arr.length) {

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

    table.appendChild(newRow);

    i++;
    };
};

// MOSTRA OS DADOS DE DESCRIÇÃO E DATA
function showInfo(i) {
    listFunction();

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

    listFunction();
};

 // FUNÇÃO PARA APAGAR PRODUTO
function deleteInfo(i) {
    addedP.innerHTML = "";

    j = 0;
    let tempArr = new Array();
    // ADICIONA CADA ELEMENTO SEM SER O APAGADO PARA UM ARRAY TEMPORÁRIO
    while ( j < arr.length ) {
        if (j != i) {
            tempArr.push(arr[j]);
        };

        j++;
    };
    
    // SUBSTITUI OS DADOS DA ARRAY GLOBAL PELOS DA TEMPORÁRIA
    arr = tempArr;
    
    // ATUALIZA OS IDS DE TODOS OS PRODUTOS PARA QUE FIQUEM SEQUENCIAIS
    j=0;
    while (j<arr.length){
    arr[j].id = parseInt(j); 
    j++;
    };

    // ATUALIZA A LISTA DE PRODUTOS
    listFunction();
    // ATUALIZA O VALOR DO ID PARA ADIÇÃO DE NOVOS PRODUTOS PARA O PRÓXIMO ID DISPONÍVEL
    productId = arr.length;
};