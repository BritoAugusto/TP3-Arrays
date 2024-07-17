//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const texto = prompt('Ingrese un breve texto')

function analizarTexto(texto) {
    let mayusculas = 0;
    let minusculas = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] >= 'A' && texto[i] <= 'Z') {
            mayusculas++;
        }else if(texto[i] >= 'a' && texto[i] <= 'z')
        minusculas++;
    }


if (mayusculas > 0 && minusculas === 0) {
    document.write(`La cadena ${texto} esta formada solo por letras mayusculas`)

} else if (mayusculas === 0 && minusculas > 0) {
        document.write(`La cadena '${texto}' esta formada solo por letras minusculas`);

}else {
        document.write(
          `La cadena '${texto}' esta formada por una combinación de minusculas y mayusculas`);
}
  }


analizarTexto(texto);