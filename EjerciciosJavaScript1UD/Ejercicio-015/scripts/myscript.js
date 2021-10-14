/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario una cadena de texto y mostrar el número de vocales
*
*
*   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
*
*
*   Salida  : Número de vocales (p.j: 8)
*
*
***************************************************************************************************************/
function contarVocales(cadena){
    cadena = cadena.toLowerCase();
    let cont=0;
    for(let i = 0; i< cadena.lenght; i++){
        switch(cadena[i]){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                cont++;
        }
    }
    return cont;
}
function contarLetra(cadena,letra) {
  let contador=0
  let posicion=cadena.indexOf(letra)
  while (posicion!=-1) {
      contador++
      posicion=cadena.indexOf(letra,posicion+1)
      console.log(`Contador:${contador} Posicion: ${posicion}`)
  }
}

function contarLetra2(cadena,letras){
    let contador = 0
    for (let i = 0; i<cadena.length; i++){
        console.log(`${contador} - Contador`)
        contador=(letras.indexOf(cadena[i])!=-1)?++contador:contador
        
    }

}



let cadena = "La verdad saldrá a la luz";
let letras = "aeiou"
contarLetra2(cadena,letras)


