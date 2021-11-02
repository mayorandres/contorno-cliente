/***************************************************************************************************************
*  
*   Objetivo: Determinar cuantas vocales mayúsculas hay en una cadena introducida por el usuario y muestre 
*             el resultado por consola.
*
*   Entrada : cadena
*
*
*   Salida  : número de vocales mayúsculas
*
*
***************************************************************************************************************/

let cadena = "DamE una cAdEna de TExtO"

function contarMayusculas(cadena){
    let numMayus = 0
    for(let i=0; i<cadena.length ;i++){
        switch(cadena[i]){
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
                numMayus++
                continue
            default:
                continue
        }
    }
    return numMayus
}


console.log(contarMayusculas(cadena))