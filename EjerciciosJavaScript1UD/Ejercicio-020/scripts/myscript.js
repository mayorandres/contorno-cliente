/***************************************************************************************************************
*  
*   Objetivo: Solicitamos el número de caramelos y el número de niños, y calcule
*             cuantos caramelos tocan por niño y cuantos sobran. 
*
*   Entrada : nCaramelos, nPeques
*
*
*   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
*                   El número de caramelos por niño es: XXXX
*                   El número de caramelos que sobran es: YYYY
*
***************************************************************************************************************/
function leerNumero(){
    let leerNumero
    do {
        numero= prompt("Dame un número")
    }while(isNaN(numero)|| !Number.isInteger(parseFloat(numero)) || parseInt(numero)<0)
    return numero
}

function contarCaramelos(n1,n2){
    let caramelos = parseInt(n1/n2)
    let resto  = n1%n2
    return `
    El numero de caramelos por niño es: ${caramelos}
    El número de caramelos que sobran es: ${resto}`
}


let nCaramelos = leerNumero()
let nPeques = leerNumero()

console.log(contarCaramelos(nCaramelos,nPeques))