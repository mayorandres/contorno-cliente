/***************************************************************************************************************
*  
*   Objetivo: Determinar si un número entero introducido es par o impar
*             Crear para ello una función
*
*   Entrada : n
*
*   Salida  : El número n es (par|impar)
*
***************************************************************************************************************/

const impar = (num) => {
    console.log((num%2==0)?`O número ${num} é par`: `O número ${num} é impar`)
}

impar(4)