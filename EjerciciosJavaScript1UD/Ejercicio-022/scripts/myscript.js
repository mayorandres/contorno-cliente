/***************************************************************************************************************
*  
*   Objetivo: Solicitamos tres números al usuario e indicamos cual es el mayor
*
*
*   Entrada : numero1, numero2, numero3
*
*
*   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
*
*
***************************************************************************************************************/
function leerNumero(){
    let numero
    do{
        numero = prompt("Dame un número")
    }while(isNaN(numero) || !Number.isInteger(parseFloat(numero)) || parseInt(numero)<0)
    return numero
}

function cualMayor(n1,n2,n3){
    let nums = [n1,n2,n3]
    let max = 0
    for (let i=0; i<nums.length;i++){
        if (nums[i] > max){
            max = nums[i]
        }
    }
    return max
}

let n1 = leerNumero()
let n2 = leerNumero()
let n3 = leerNumero()

console.log(cualMayor(n1,n2,n3))