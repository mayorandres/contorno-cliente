/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número es o no primo empleando una función
*             Un número n es primo si sólo es divisible por 1 y por n
*
*   Entrada : numero entero
*
*   Salida  : El numero n (es|no es) primo
*
***************************************************************************************************************/
function isCoursin(num) {
    let sum = 0
    for(let i=1;i<=num;i++){if(num%i==0){sum += 1}}
    return (sum == 2)? `Número ${num} es primo`: `Número ${num} non é primo`
}

console.log(isCoursin(7))