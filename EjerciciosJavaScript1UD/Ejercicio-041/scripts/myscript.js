/***************************************************************************************************************
*  
*   Objetivo: Determinar si in número es perfecto o no a través de una función
*             Un número es perfecto cuando el número es igual a la suma de sus divisones.
*
*   Entrada : entero n
*
*
*   Salida  : El número n (es|no es) perfecto !
*
*
***************************************************************************************************************/

const perfecto = numero => {
    let nFinal = 0
    let numeros = Array.from({length:numero-1},(el,i)=>i+1)
    return (numeros.filter(el=>numero%el===0).reduce((ant,act)=>ant+act)==numero)?`El número ${numero} es perfecto`:`El número ${numero} NO es perfecto`
    
    
    /*numeros.forEach(el => {
        console.log("elemento " + el)
        if (numero%el==0){
            console.log("el " + el)
            nFinal += el
        }
    })*/

    //return (nFinal === numero)?`El número ${numero} es perfecto`:`El número ${numero} NO es perfecto`
    
}

console.log(perfecto(6))