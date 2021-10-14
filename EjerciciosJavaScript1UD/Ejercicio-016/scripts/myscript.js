/***************************************************************************************************************
*  
*   Objetivo: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
*             P.j: Dabale arroz a la zorra el abad
*
*
*   Entrada : Cadena de texto
*
*
*   Salida  : La cadena .... (es|no es) un palíndromo
*
*
***************************************************************************************************************/
let cadena = prompt("Dame una cadena")

function palindromo(cadena){
    for(let i = 0; i<cadena.length; i++){
        if(cadena.indexOf(cadena[i]) == 0){ // Se o carac
            cadena = cadena.substring(i,cadena.length-i)
            palindromo(cadena)
        }else{
            document.write("NO es palindromo")
        }
    }
}


