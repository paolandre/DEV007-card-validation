const validator = {

  isValid: function (creditCardNumber) {

    // Paso 1: quitar los espacios y aceptar solo digitos del 0 al 9

    let digits = ''; // inicializamos la variable digits vacía / ''hace que no haya un valor inicial

    for (let i = 0; i < creditCardNumber.length; i++) { //< menor que
      // el indice (posición) inicia en cero; 
      //i se ejecutará varias veces, y la cantidad de veces que se ejecutará el ciclo dependerá de la cantidad de caracteres que tenga el número de tarjeta de crédito;
      //i = i + 1 

      const digit = creditCardNumber[i]; // creamos la variable digit 
      // se usa el [i] para acceder al valor del caracter (indice)
      if (digit.match(/[0-9]/)) { // si el dígito coincide con un número del 0 al 9

        digits = digits + digit; //llenado de digits
        //digits es una cadena vacía que se va llenando con los dígitos que se encuentran en la cadena creditCardNumber y que cumplen con la condición de ser digitos del 0 al 9
      }
    }
    
    // Paso 2: Paso 2: Multiplicamos por dos cada segundo dígito, empezando por el dígito más a la derecha (es decir, el dígito de verificación). Luego, si el resultado de la multiplicación es mayor a 9, se resta 9 al resultado. Guardamos los dígitos multiplicados en una nueva variable llamada "doubledDigits"
   
    let doubledDigits = ''; //declaramos la función de doubledDigits como vacía

    for (let i = digits.length - 2; i >= 0; i = i - 2) { //pasa por el ciclo for 
      //i empieza en -2 al final del número de tarjeta ingresado; 
      //el ciclo se cumple si i es mayor o igual a cero; 
      //i se va corriendo en menos dos posiciones

      let doubledDigit = digits[i] * 2; // primera iteración digits: 1234567[8]9 / doubledDigit: 1234567[8]9 *2=16
      //con [i] se accede al valor de la cadena y después con *2 se múltiplica por dos
      if (doubledDigit > 9) { //
        //si el número de la cadena multiplicado por dos es mayor a 9
        doubledDigit = doubledDigit - 9;//se resta 9 // doubledDigit (16-9)= 7
        //En el algoritmo de Luhn, cuando un dígito es duplicado y el resultado es mayor a 9, se le resta 9 al resultado. Esto es necesario porque el mayor número posible que puede ser agregado a un solo dígito es 9 (al duplicar, se obtiene como máximo 18). Si el resultado es mayor que 9, entonces se debe reducir nuevamente a un solo dígito para poder sumarlo en el siguiente paso del algoritmo.
      }

      doubledDigits = doubledDigit + doubledDigits; 
      //doubledDigit 7 - va sumandose a la cadena vacía de doubleDigists 
      //en orden inverso por el i = i - 2

    }
  
    // Paso 3: Sumamos todos los dígitos, incluyendo los dígitos duplicados.

    let sum = 0; // Inicializamos la variable de suma en cero

    for (let i = 0; i < digits.length; i++) { // Recorremos los dígitos <menor que
      //se inicia la i en cero; se recorre todas las posiciones del número; se va sumando +1 en el ciclo for

      const digit = parseInt(digits[i], 10); // Obtenemos el valor numérico del dígito en la posición i
      //se usa parseInt para convertir el valor de i en un número entero
      // se usa el 10 para que reconozca el sistema con el que trabajamos, en este caso es decimal, y no binario, por ejemplo, que sería 2

      if (i % 2 === 0) { //El resto es el resultado de una división en la cual no se puede obtener un resultado exacto. Por ejemplo, si dividimos 13 entre 5, obtenemos 2 como resultado con un resto de 3. 
      //La expresión i % 2 === 0 es una operación matemática que devuelve el resto de la división de i entre 2. Si el resultado de esta operación es igual a 0, significa que i es un número par, de lo contrario, i es un número impar.
      //igual a 0 es un número par / si es par

        sum = sum + digit; // Sumamos el dígito a la suma//
      
      } else { // Si la posición es impar
        
        const doubledDigit = digit * 2; // Duplicamos el dígito

        if (doubledDigit > 9) { // Si el dígito duplicado es mayor que 9 (o sea, tiene dos cifras)

          //La expresión += es un operador de asignación que suma el valor del operando de la derecha al valor del operando de la izquierda y asigna el resultado a la variable de la izquierda.
          sum = sum + (doubledDigit % 10) + 1; // Sumamos las dos cifras por separado y sumamos 1 
          //La operación % es el operador módulo (devuelve el resto de la división de doubledDigit entre 10)
        
        } else { // Si el dígito duplicado tiene una sola cifra
          sum = sum + doubledDigit; // Sumamos el dígito duplicado a la variable sum (suma)
        }
      }
    }

    //console.log (sum)

    // Paso 4: Si la suma total de los dígitos de la tarjeta de crédito es un múltiplo de 10
    if (sum % 10 === 0) {
      return true; // el número de tarjeta es valido
    } else {
      return false; // el número de tarjeta es invalido
    }
  },

  maskify: function (creditCardNumber) {

    if (creditCardNumber.length <= 4) { // si la longitud del número de tarjeta de crédito es 4 o menos
      return creditCardNumber; //devolvemos el valor de la variable "creditCardNumber", o sea el número de tarjeta
    } else { //si no, entonces 

      const lastFourDigits = creditCardNumber.slice(-4); //El método slice() es un método de las cadenas de texto en JavaScript que se utiliza para extraer una parte de una cadena y devolverla como una nueva cadena sin modificar la original.
      //El parámetro -4 especifica que se deben tomar los últimos cuatro caracteres de la cadena, contando desde el final de la cadena hacia el principio.
      //los parentesis de (-4) se usan para indicar que es la instrucción del método .slice 
      let maskedDigits = ''; // La variable está destinada a contener los dígitos de la tarjeta de crédito enmascarados (ocultos)
      //la variable está vacía

      for (let i = 0; i < creditCardNumber.length - 4; i++) {
        //for se usa para ir de caracter en caracter por la cadena de los números 
        //la variable i empieza en 0; i  recorre la longitud de la cadena de numeros de la tarjeta eexcepto los ultimos 4; se incrementa la variable i en 1;
        
        maskedDigits = maskedDigits + '#';//
        //En la primera iteración del ciclo, se agregará un "#" a "maskedDigits", y luego en la segunda iteración se agregará otro "#", y así sucesivamente hasta que se completen las iteraciones y se haya ocultado la cantidad necesaria de dígitos. Excepto los últimos 4 caracteres 
      }
      
      return maskedDigits + lastFourDigits;
      //Devuelve la cadena maskedDigits (que contiene los caracteres enmascarados de la tarjeta de crédito) concatenada con la cadena lastFourDigits (que contiene los últimos cuatro dígitos de la tarjeta de crédito).
    }
  }
};

export default validator;
// exportar el validador es necesario para su reutilización en otros módulos y archivos


