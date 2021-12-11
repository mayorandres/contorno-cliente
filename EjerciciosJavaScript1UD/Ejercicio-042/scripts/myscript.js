/***************************************************************************************************************
*  
*   Objetivo: Generar los primeros n números primos 
*
*
*   Entrada : número entero n
*
*
*   Salida  : 1 2 3 5 7 ....
*
*
***************************************************************************************************************/


const esPrimo = (numero) => {
    let numeros = Array.from({length:numero-2},(el,i)=>i+2).filter(el=>numero%el==0)
    return (numeros.length===0)
}

let vector = Array.from({length:100},(el,i)=>i+1)
console.log(vector.filter(el=>esPrimo(el)))
