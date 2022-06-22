let addButton = document.getElementById("add-product");
let listButton = document.getElementById("list-product");
let arr = new Array();
let productId = parseInt(0);
let productName;
let productDescription;
let productValor;
let inclusionDate;
let table = document.querySelector("table");

addButton.addEventListener ('click', addFunction);
/* listButton = addEventListener("click", listFunction); */

function addFunction() {
    productId += 1;
    productName = document.getElementById("name").value;
    productDescription = document.getElementById("description").value;
    productValor = document.getElementById("valor").value;
    inclusionDate = Date.now();
    arr [ productId ] = {
        id: productId,
        name: productName,
        description: productDescription,
        valor: productValor,
        date: inclusionDate
    };

    createTableRow();
};

function createTableRow() {
    let newRow = document.createElement("tr");
    newRow;
    newRow.id = "product-" + productId;

    let newColumnId = document.createElement("td"); 
    newColumnId.innerHTML = arr[productId].id;
    newRow.appendChild(newColumnId)
    let newColumnName = document.createElement("td"); 
    newColumnName.innerHTML = arr[productId].name;
    newRow.appendChild(newColumnName)

    /* VALOR EM DECIMAIS 00,00 */
    let newColumnValor = document.createElement("td"); 
    newColumnValor.innerHTML = arr[productId].valor;
    newRow.appendChild(newColumnValor)

    /* FAZER ANCORA */
    let newColumnEdit = document.createElement("td");
    newColumnEdit.innerHTML = "editar";
    newRow.appendChild(newColumnEdit)
    let newColumnDelete = document.createElement("td"); 
    newColumnDelete.innerHTML = "apagar";
    newRow.appendChild(newColumnDelete)

    let newColumnDescription = document.createElement("td"); 
    newColumnDescription.innerHTML = arr[productId].description;
    newRow.appendChild(newColumnDescription)

    /* TRANSFORMAR DATE EM DMY */
    let newColumnDate = document.createElement("td"); 
    newColumnDate.innerHTML = arr[productId].date;
    newRow.appendChild(newColumnDate)

    table.appendChild(newRow);
};