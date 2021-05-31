let preservedCreditCardNumber = ""; // declaro variable global que guarda los dígitos ingresados por el usuario en un string antes de que sean enmascarados para poder el usar esta variable en la funcion isValid

const validator = { // Objeto validator que contiene las funciones maskify e isValid

  maskify: function () {

    let creditCardNumber = document.getElementById("creditCardNumber").value // declaro variable
      , creditCardNumberArray = creditCardNumber.toString().split("") // declaro y lleno un array con los dígitos ingresados en el input
      , maskifycreditCardNumber = new Array() //declaro un array que enmascarará el input menos los 4 últimos dígitos
      , deleteNumbers = preservedCreditCardNumber.length - creditCardNumber.length; // cuando el usuario ingresa dígitos y luego borra uno o más dígitos del final, esta variable guarda la diferencia entre los números orignalemnte ingresados y los que quedaron.

    // condicional que llena la variable global preservedCreditCardNumber 
    if (creditCardNumber.length > preservedCreditCardNumber.length) { // Si el largo del número instroducido por el usuario es mayor a el largo de preservedCreditCardNumber (se inicializa en 0)
      preservedCreditCardNumber += creditCardNumber.substr(-1) // preservedCreditCardNumber es igual a la concatenación de cada último número ingresado por el usuario
    } else {
      preservedCreditCardNumber = preservedCreditCardNumber.substr(0, preservedCreditCardNumber.length - deleteNumbers) // preservedCreditCardNumber es igual el trozo de string que va desde el índice cero hasta el final, menos la cantidad de dígitos borrados.
    }

    console.log("Número TC real: " + preservedCreditCardNumber)


    // ciclo for para recorrer el array y condicional que reemplaza los números de la TC por asteríscos, excepto los últimos 4 dígitos
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i >= creditCardNumber.length - 4) {
        maskifycreditCardNumber.push(creditCardNumberArray[i].toString())
      } else {
        maskifycreditCardNumber.push("*")
      }
    }

    document.getElementById("creditCardNumber").value = maskifycreditCardNumber.join(""); // aplico método join() para unir los string creadas por la condicional anterior (primeros números de la tarjeta reemplazados por asteriscos + 4 últimos dígitos de la TC)

    console.log("Maskify Credit Card Number " + maskifycreditCardNumber)


    return maskifycreditCardNumber; // devuelve el número de TC enmáscarado

  }

  , isValid: function () {
    let i = 0
      , creditCardNumberArray = new Array() // declaro array que contendrá string de los número de la tarjeta
      , creditCardNumberReverseArray = new Array() //  declaro array que contendrá número de la tarjeta de crédito en orden inverso
      , total = 0 // total a validar como multiplo de 10
      , validationResult = false; // declaro variable boolean y la inicializo por defecto en false


    if (preservedCreditCardNumber == "") {
      alert("ingresa tu numero")
    } else {
      for (i = 0; i <= preservedCreditCardNumber.length - 1; i++) {  // ciclo for para llenar el array con los números ingresados por el usuario
        creditCardNumberArray[i] = preservedCreditCardNumber.substr(i, 1);
      }
    }

    creditCardNumberReverseArray = creditCardNumberArray.reverse(); // aplico metodo reverse() al array con los números de la tarjeta para invertir el orden de los mismos

    console.log(creditCardNumberReverseArray);

    // ciclo for para recorrer el array de los números de la tarjeta con el orden invertido.
    for (i = 0; i <= creditCardNumberReverseArray.length - 1; i++) {
      if (i % 2 !== 0) { //condicional if para multiplicar por 2 los dígitos en las posiciones pares
        creditCardNumberReverseArray[i] = creditCardNumberReverseArray[i] * 2
        if (creditCardNumberReverseArray[i] > 9) { //if anidado para restar nuevo a los productos que sean de 2 dígitos.
          creditCardNumberReverseArray[i] = creditCardNumberReverseArray[i] - 9
        }
      }
      total = total + Number(creditCardNumberReverseArray[i]); // asigno valor a total: total es igual a total más cada uno de los números dentro del array(aplico objeto primitivo Number a cada uno de los números en el array para que los sume y no los concatene)
    }

    console.log(creditCardNumberReverseArray);
    console.log(total);



    if (total % 10 == 0) { // condicional if para validar si total es múltiplo de 10
      validationResult = true;
    } else {
      validationResult = false;
    }
    console.log(validationResult);
    return validationResult;

  }

};

export default validator;
