// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 
const numero = parseInt(prompt('Ingrese un número'))

function numeroEntero(numero) {
    if (numero % 2 === 0 || numero % 4 === 0 || numero % 6 === 0 || numero % 8 === 0 ) {
        document.write(`El número ${numero} es un número Par`);
    }else {
        document.write(`El número ${numero} es un número Impar`);
    }
 }

 numeroEntero(numero);