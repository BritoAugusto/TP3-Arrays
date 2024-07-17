//3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}
  let apariciones = Array(13).fill(0);

  for (let i = 0; i < 50; i++) {
    let dado1 = lanzarDado();
    let dado2 = lanzarDado();
    let suma = dado1 + dado2;
    apariciones[suma]++;
  }
 
 document.write(`<table><tbody>`);
 
   document.write(`<tr>`);
     document.write(`<th>Suma🎲🎲</th>`);
     document.write(`<th>Apariciones</th>`)
     document.write(`</tr>`);
     
     for(let i = 2; i <= 12; i++){
        document.write('<tr>')
         document.write(`<td>${i}</td>`)
         document.write(`<td>${apariciones[i]}</td>`);
         document.write('</tr>')
   }
 
 document.write(`</tbody> </table>`);

