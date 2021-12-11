/***************************************************************************************************************
*  
*   Objetivo: Determinar en un texto el número de palabras, la primera palabra y la última
*
*   Entrada : una cadena
*
*   Salida  : Se muestra el texto(cadena) introducido por el usuario
*             Número de palabras: XXX
*             Primera palabra: YYYYY
*             Última palabra: ZZZZZ
*             Palabras ordenadas de la a a la z: AAA BBBB CCCC DDDD
*             Palabras ordenadas de la z a la a: ZZZ YYYY WWWW 
*
***************************************************************************************************************/
let textoEntrada = "Isto é un texto de Prueba que fago para ver si order todo"

function name(a,b) {
    if(a<b){return 1}
    else if(a>b){return -1}
    else{return 0}    
}


function repasarTexto(txt){
    let palabras = txt.toLowerCase().split(" ");
    let first = palabras[0]; let last = palabras[palabras.length -1];
    palabras = palabras.sort();
    return `Número de palabras: ${palabras.length}
            Primera palabra: ${first}
            Última palabra: ${last}
            Palabras ordenadas de la a a la z: ${palabras.sort().toString()}
            Palabras ordenadas de la z a la a: ${palabras.reverse().toString()} `


}
console.log(repasarTexto(textoEntrada))

