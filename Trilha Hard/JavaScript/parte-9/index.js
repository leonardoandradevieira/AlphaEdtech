let button = document.querySelector("button");
let operator;
let result;
let num1;
let num2;
let start;
let sum;
let startE;
let sumE;
let division;
let startD;
let equals = document.getElementById("equals");

function plus(num1, num2) {
    try {
        equals.innerHTML = "";
        let notInteger = Number.isInteger(num1);
        let notInteger2 = Number.isInteger(num2);
        if ( num1 < 0 || num2 < 0 ) throw `[sum] Impossible to sum ${num1} + ${num2}`
        if ( notInteger == false || notInteger2 == false ) throw `[sum] Impossible to sum ${num1} + ${num2}`

        result = num1 + num2;
        equals.innerHTML = `${num1} + ${num2} = ${result}`;
        return result;
    } catch (error) {
        result = "erro";
        equals.innerHTML = error;
    };
};

function minus(num1, num2) {
    equals.innerHTML = "";
    let notInteger = Number.isInteger(num1);
    let notInteger2 = Number.isInteger(num2);
    try {
        if ( num1 < num2 ) throw `[subtract] Impossible to subtract ${num1} - ${num2}`
        if ( num1 < 0 || num2 < 0 ) throw `[subtract] Impossible to subtract ${num1} - ${num2}`
        if ( notInteger == false || notInteger2 == false ) `[subtract] Impossible to subtract ${num1} - ${num2}`

        if ( plus(num2,start) === num1 ) {
            equals.innerHTML = `${num1} - ${num2} = ${start}`;
        } else {
            start =  parseInt(plus (start, 1));
            minus(num1, num2);
        };
    } catch (error) {
        result = "erro";
        equals.innerHTML = error;
    };
};

function times(num1,num2) {
    try {
        equals.innerHTML = "";
        let notInteger = Number.isInteger(num1);
        let notInteger2 = Number.isInteger(num2);
        if ( num1 < 0 || num2 < 0 ) throw `[multiply] Impossible to multiply ${num1} * ${num2}`
        if ( notInteger == false || notInteger2 == false ) throw `[multiply] Impossible to multiply ${num1} * ${num2}`

        if ( start < num2 ) {
            sum = parseInt(plus(sum, num1));
            start = plus(start, 1);
            times(num1, num2);
            return sum;
        } else {
            equals.innerHTML = `${num1} * ${num2} = ${sum}`;
        };
    } catch (error) {
        result = "erro";
        equals.innerHTML = error;
    };
};

function power(num1,num2) {
    try {
        equals.innerHTML = "";
        let notInteger = Number.isInteger(num1);
        let notInteger2 = Number.isInteger(num2);
        if ( num1 < 0 || num2 < 0 ) throw `[multiply] Impossible to multiply ${num1} * ${num2}`
        if ( notInteger == false || notInteger2 == false ) throw `[multiply] Impossible to multiply ${num1} * ${num2}`

        if ( startE < num2 ) {
            start = 0;
            sum = 0;
            sumE = times(sumE,num1);
            startE = plus(startE, 1);
            power (num1, num2);
        } else {
            equals.innerHTML = `${num1} ^ ${num2} = ${sumE}`;
        };
    } catch (error) {
        result = "erro";
        equals.innerHTML = error;
    };
};

function divided(num1,num2) {
    try {
        equals.innerHTML = "";
        let notInteger = Number.isInteger(num1);
        let notInteger2 = Number.isInteger(num2);
        if ( num1 < 0 || num2 < 0 ) throw `[divide] Impossible to divide ${num1} / ${num2}`
        if ( notInteger == false || notInteger2 == false ) throw `[divide] Impossible to divide ${num1} / ${num2}`
        if ( num2 === 0 ) throw `[divide] Division by zero`
        if ( num2 > num1 ) throw `[divide] Impossible to divide ${num1} / ${num2}`

        if ( num1 < division ) {
            equals.innerHTML = `${num1} / ${num2} = ${startE}`;
        } else {
            start = 0;
            sum = 0;
            startE = startD;
            startD = plus(startD, 1);
            division = times(startD, num2);
            divided(num1, num2);
            console.log(startD, division, num1, num2);
        };
    } catch (error) {
        result = "erro";
        equals.innerHTML = error;
    };
};

button.addEventListener("click", calculator);

function calculator() {
    num1 = parseFloat(document.getElementById("first-number").value.padStart(1,'0'));
    num2 = parseFloat(document.getElementById("second-number").value.padStart(1,'0'));
    operator = document.getElementById("calculator").value;
    start = 0;
    sum = 0;

    switch (operator) {
        case "1":
            result = 0;
            plus(num1, num2);
            break;
        case "2": 
            minus(num1, num2);
            break;
        case "3":
            times(num1, num2);
            break;
        case "4":
            startE = 1;
            sumE = num1;
            if ( num2 === 0 ){
                equals.innerHTML = `${num1} * ${num2} = 1`;
            } else {
                power(num1, num2);
            };
            break;
        case "5":
            startD = 1;
            division = 0;
            division = times(startD, num2);
            divided(num1, num2);
            break;
    };
};