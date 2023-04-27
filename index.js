// El uso de import nos permite utilizar el código de otros módulos.
import validator from "./validator.js";

document.getElementById("boton").addEventListener("click", boton);
//del html se obtiene el id boton que al hacer click se le asigna la función "boton" 

function boton() { //los parentesis llaman a la función (son necesarios)

  //Asignación de variables dentro de la función boton 
  const creditCardNumber = document.getElementById("numeroTarjeta").value;
  //obtenemos el valor del elemento del input con el id "numeroTarjeta" en el HTML. Este valor se almacena en una variable llamada creditCardNumber.

  // Validamos el número de tarjeta de crédito usando el método IsValid del validator
  const isValidCreditCard = validator.isValid(creditCardNumber);
  //La función isValid devuelve true si el número de tarjeta de crédito es válido y false si no lo es. El resultado de la validación se almacena en la variable isValidCreditCard.

  // Enmascaramos el número de la tarjeta de crédito usando el método maskify del validator
  const maskedCreditCardNumber = validator.maskify(creditCardNumber);
  //se alamacenan los números de la función maskify en la variable maskedCreditCardNumber

  // Mostramos el resultado con la variable resultado del elemento p del html
  const resultado = document.getElementById("resultado");

  //
  
  if (isValidCreditCard) { //Si isValidCreditCard es 'true'
    resultado.innerHTML = `La tarjeta es válida ${maskedCreditCardNumber}`;//es valida 
    resultado.style.color = "#0ea2b6";//en este color
  } else {//si no es valida, 
    resultado.innerHTML = `La tarjeta no es válida ${maskedCreditCardNumber}`;
    resultado.style.color = "#f867ab"; // se muestra este color
  }

  //Si no se ingresa el número de la tarjeta de crédito
  if (creditCardNumber === "") {
    resultado.innerHTML = "Debes ingresar un número de tarjeta";
    resultado.style.color = "#f78b6a";
    return; //return finaliza condicional
  }

}

//Estas funciones son para limitar el input de las casillas a lo que dice el método de slice

const numberCard = document.getElementById("numeroTarjeta");

numberCard.addEventListener("input", () => {
  if (numberCard.value.length > 16) {
    numberCard.value = numberCard.value.slice(0, 16);
  }
});

const cvvInput = document.getElementById("cvv");

cvvInput.addEventListener("input", () => {
  if (cvvInput.value.length > 3) {
    cvvInput.value = cvvInput.value.slice(0, 3);
  }
});

const anioInput = document.getElementById("anio");

anioInput.addEventListener("input", () => {
  if (anioInput.value.length > 4) {
    anioInput.value = anioInput.value.slice(0, 4);
  }
});

const input = document.getElementById("mes");

input.addEventListener("input", () => {
  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2);
  }
});
