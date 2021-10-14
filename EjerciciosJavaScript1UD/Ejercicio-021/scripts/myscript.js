/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el valor de los catetos de un triángulo rectángulo y calcula la hipotenusa del
*             triángulo empleando el teorema de Pitágoras (hipotenusa=raiz_cuadrada(catetoA²+catetoB²))
*
*   Entrada : catetoA, catetoB
*
*
*   Salida  : La hipotenusa del triángulo con catetos catetoA y catetoB es XXXX
*
*
***************************************************************************************************************/
function leerNumero(){
    let numero
    do {
        numero = prompt("Dame un número")
    }while(isNaN(numero)|| !Number.isInteger(parseFloat(numero))|| parseInt(numero)<0)
    return numero
}

function calcularHipotenusa(n1,n2){
    let hipotenusa = Math.round(Math.sqrt(n1**2 + n2**2) * 100) / 100
    return `La hipotenusa del triángulo con catetos ${n1} y ${n2} es: ${hipotenusa}`
}

let catA = leerNumero()
let catB = leerNumero()

console.log(calcularHipotenusa(catA,catB))
