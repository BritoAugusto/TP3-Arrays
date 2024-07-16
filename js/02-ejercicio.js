/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let nombres = [];
do {
    let ciudades = prompt('ingresar nombres de ciudades')
    if (ciudades !== null && ciudades !== undefined) {
        nombres.push(ciudades)
    }
    
}while (confirm('¿Desea Continuar?'))

    const listadoCity = ()=> {
      document.write("<h2>Lista de Ciudades:</h2>");
      document.write("<ul>");
      for (let i = 0; i < nombres.length; i++) {
        document.write(`<li>${nombres[i]}</li>`);
      }
      document.write("</ul>");
    }
    listadoCity();

    document.write(`La longitud del arreglo es de ${nombres.length}`)
   
if (nombres.length > 0) {
    document.write(`<li>La primera posicion del arreglo es ${nombres[0]}</li>`);
    
}
if (nombres.length > 2) {
  document.write(`<li>Tercera posición: ${nombres[2]}</li>`);
}
if (nombres.length > 0) {
  document.write(`<li>Última posición: ${nombres[nombres.length - 1]}</li>`);
}


nombres.push("París");

listadoCity();

if (nombres.length > 1) {
  document.write(`<h4>${nombres[1]} ocupa la segunda posición</h4>`)
}
    
 nombres[1] = 'Barcelona'; 
 listadoCity();





    
    
    
