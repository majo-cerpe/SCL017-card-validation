import validator from './validator.js';

console.log(validator);



document.getElementById("creditCardNumber").onkeyup = validator.maskify;


document.getElementById("validationButton")
    .addEventListener("click", function () {
        let validationResult = validator.isValid();
        if (document.getElementById("creditCardNumber").value == "") {
            alert("debes ingresar un número de tarjeta de crédito válido")
        } else if (validationResult == true) {
            alert("El número ingresado es válido")
        } else {
            alert("el número ingresado es inválido")
        }
    });

