/***************************************************************************************************************
*  
*   Objetivo: Solicita un texto y una palabra.
*
*
*   Entrada : cadenas de texto: texto, palabra
*
*
*   Salida  : Indica todas las posiciones en las que se encuentra la palabra dentro de texto
*
*
***************************************************************************************************************/
let cadTexto = prompt("Dame un texto");
let palabra = prompt("Dame una palaba");
let posicion =0


while(posicion != -1){
    console.log(`Posicion ${posicion}`)
    posicion = cadTexto.indexOf(palabra,posicion+1)
    
    
}