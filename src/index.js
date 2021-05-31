import validator from './validator.js';

console.log(validator);

document.getElementById("creditCardNumber").onkeyup = validator.maskify;


document.getElementById("validationButton").onclick = validator.isValid;


/*

document.getElementById("validationButton")
    .addEventListener("click", function () {
        let creditCardNumber = document.getElementById("creditCardNumber").value;

        if (creditCardNumber == "") {
            alert("ingresa tu numero")
        } else {
            document.getElementById("validationButton").onclick = validator.isValid;
        }
    });
    
*/