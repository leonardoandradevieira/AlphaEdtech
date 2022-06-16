let button = document.querySelector("button");
let person;
let date;
let formName = document.getElementById("name");
let formDate = document.getElementById("date");
let formMonth = document.getElementById("month");
let formYear = document.getElementById("year");
let formWeight = document.getElementById("weight");
let formHeight = document.getElementById("height");
let formGender = document.getElementById("gender");
let dateError = document.getElementById("date-error");

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
};

function validateDate() {
    
    /* datas inválidas */
    if (date.month > 12) {
        dateError.innerHTML = "Mês inválido.";
        return false;
    } else if (date.month === 1 || date.month === 3 || date.month === 5 || date.month === 7 || date.month === 8 || date.month === 10 || date.month === 12) {
        if (date.date > 31) {
            dateError.innerHTML = "Dia inválido.";
            return false;
        };
    } else if (date.month === 4 || date.month === 6 || date.month === 9 || date.month === 11) {
        if (date.date > 30) {
            dateError.innerHTML = "Dia inválido.";      
            return false;
        };
    } else if (date.month === 2) {
        if ((date.year % 400 === 0) || (date.year % 4 === 0) && (date.year % 100 != 0)) {
            if (date.date > 29) {
                dateError.innerHTML = "Dia inválido.";
                return false;
            }
        } else if (date.date > 28) {
            dateError.innerHTML = "Dia inválido.";
            return false;
        };
    };

    /* data superior a atual */
    const now = new Date();
    if ( person.birthDate > now) {
        dateError.innerHTML = "Você ainda não nasceu.";
        return false;
    };

    /* valor negativo */
    if (date.year < 0 || date.month < 0 || date.date < 0) {
        dateError.innerHTML = "Data inválida.";
        return false;
    };
};

function results() {

    document.getElementById("object-name").innerHTML = "Nome: " + person.name;   
    document.getElementById("object-birthdate").innerHTML = "Data de Nascimento: " + date.date + "/" + date.month + "/" + date.year;
    document.getElementById("object-weight").innerHTML = "Peso: " + person.weight + " kg";
    document.getElementById("object-height").innerHTML = "Altura: " + person.height + " cm";
    document.getElementById("object-gender").innerHTML = "Gênero: " + person.gender; 

    document.getElementById("object").innerHTML = JSON.stringify(person);

    console.log(person);

    document.getElementById("error").innerHTML = "";
};

function tryCatch() {
    try {
        if (formName.value == "" ) throw "Field “name” is invalid!"
        if (formName.value.length < 5 ) throw "Field “name” is invalid!"
        if (formDate.value == "" ) throw "Field “birthDate” is invalid!"
        if (dateError.innerHTML != "" ) throw "Field “birthDate” is invalid!"
        if (isNaN(formWeight.value.replace(',','.')) ) throw "Field “weight” is invalid!"
        if (formWeight.value.replace(',','.') == 0 ) throw "Field “weight” is invalid!"
        if (isNaN(formHeight.value) ) throw "Field “height” is invalid!"
        if (isFloat(parseFloat(formHeight.value)) == true) throw "Field “height” is invalid!"
        if (formHeight.value == 0 ) throw "Field “height” is invalid!"

        results();
    } catch (error) {
        document.getElementById("error").innerHTML = error;
    };
};

button.addEventListener("click", object);

function object() {
    document.getElementById("date-error").innerHTML = "";

    const dateObject = {
        year: parseInt(formYear.value),
        month: parseInt(formMonth.value),
        date: parseInt(formDate.value),
    };
    
    const personObject = {
        name: formName.value,
        birthDate: new Date(dateObject.year, dateObject.month - 1, dateObject.date),
        weight: parseFloat(formWeight.value.replace(',','.')),
        height: parseInt(formHeight.value),
        gender: formGender.value,
    };

    person = personObject;
    date = dateObject;

    validateDate();
    tryCatch();

    /* console.log("");

    console.log(person.name);
    console.log(person.birthDate);
    console.log(person.weight);
    console.log(person.height);
    console.log(person.gender); */
};