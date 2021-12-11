/***************************************************************************************************************
*  
*   Objetivo: El número de Euler, e ≈ 2,71828, puede ser representado como la siguiente suma infinita:
*
*                     e =1/0!+1/1!+1/2!+1/3!+1/4!+…
*
*             n! es el factorial de un numero entero n y es el producto de 1 hasta n (0!=1)
*
*                           4! = 4 * 3 * 2 * 1
*
*             Hay que calcular el valor aproximado de "e" hasta que la diferencia entre dos sumandos
*             consecutivos sea menor que 0,0001
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

function eulerMola(num) {
    //calculamos o factorial
    let fac =1 
    for(let i=1;i<=num;i++){
        fac *= i
    }
    return fac
}


let num = 8
let numTot = 0
for(let i=0;i<=num;i++){
    numTot += 1/eulerMola(i)
}
console.log(numTot)

