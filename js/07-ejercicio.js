//7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const numero = parseInt(prompt("Ingrese un número"));

function tabla(numero) {
    document.write("<table><tbody>");
    document.write("<tr>");
    document.write(`<th>Tabla de multiplicar del 1-10 del número ${numero}`);
    document.write("</tr>");
  for (let i = 1; i <= 10; i++) {
    document.write("<tr>");
    document.write(`<td>${numero} x ${i}</td>`)
    document.write(`<td>${numero * i}`);
    document.write("</tr>");
}
document.write("</body></table>");
}

tabla(numero);
