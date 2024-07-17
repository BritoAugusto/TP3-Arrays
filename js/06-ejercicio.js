/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)*/

alert('Ingrese el valor de los lados de un rectangulo')
const ladoA = parseInt(prompt('Ingrese el valor del Lado A'));
const ladoB = parseInt(prompt("Ingrese el valor del Lado B"));

 function calcularPerimetro(ladoA, ladoB) {
     let perimetro = 2 * (ladoA + ladoB);
     return perimetro;
 }
 
document.write(`<p>El resultado del perimetro es ${calcularPerimetro(ladoA, ladoB)}</p>`)