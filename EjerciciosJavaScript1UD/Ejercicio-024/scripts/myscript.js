/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero positivo que representa el número de segundos que estamos confinados
*             por una pandemia
*
*   Entrada : segundos
*
*
*   Salida  : Mensaje tal como: "Hemos estado confinados A semanas, B días, C horas, D minutos, E segundos"
*
*
***************************************************************************************************************/
function leerNumero(){
    let numero
    do {
        numero = prompt("Dame un número de segundos")
    }while(isNaN(numero) ||!Number.isInteger(parseFloat(numero)) || parseInt(numero)<0)
    return numero
}

function calcularTiempo(n){
    let semana=parseInt(n/(3600*7*24))
    let resto=n%(3600*7*24)
    let dia=parseInt(resto/(3600*24))
    resto%=(3600*24)
    let hora=parseInt(resto/(3600))
    resto%=(3600)
    let minuto=parseInt(resto/60)
    resto%=(60)
   

    return `Hemos estado confiandos ${semana} semanas, ${dia} días, ${hora} horas, ${minuto} minutos y ${resto} segundos`
}
// dia = 86400
//semana = 604800 // 691200

let n = leerNumero()

console.log(calcularTiempo(n))