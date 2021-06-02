import validator from './validator.js';

console.log(validator);

document.getElementById("button1")
    .addEventListener("click", function () {
        document.getElementById("firstPanel").hidden = true;
        document.getElementById("secondPanel").hidden = false;
    });

document.getElementById("creditCardNumber").onkeyup = validator.maskify;

document.getElementById("validationButton")
    .addEventListener("click", function () {
        let validationResult = validator.isValid();
        if (document.getElementById("creditCardNumber").value == "") {
            alert("debes ingresar un número de tarjeta de crédito válido")
        } else if (validationResult == true) {
            alert("Los datos ingresados son válidos")
            document.getElementById("secondPanel").hidden = true;
            document.getElementById("thirdPanel").hidden = false;
        } else {
            alert("el número ingresado es inválido")
        }
    });

    document.getElementById("confirmPurchaseButton")
    .addEventListener("click", function () {
        alert("¿Estás seguro de confirmar tu compra?")
        document.getElementById("thirdPanel").hidden = true;
        document.getElementById("fourthPanel").hidden = false;
        });


