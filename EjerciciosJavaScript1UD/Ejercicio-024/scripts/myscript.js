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
const MINUTOS = 3600
const SEMANA = 7
const DIA = 24
const SEGUNDOS = 60
function calcularTiempo(n){
    let semana=parseInt(n/(MINUTOS*SEMANA*DIA))
    let resto=n%(MINUTOS*SEMANA*DIA)
    let dia=parseInt(resto/(MINUTOS*DIA))
    resto%=(MINUTOS*DIA)
    let hora=parseInt(resto/(MINUTOS))
    resto%=(MINUTOS)
    let minuto=parseInt(resto/SEGUNDOS)
    resto%=(SEGUNDOS)
   

    return `Hemos estado confiandos ${semana} semanas, ${dia} días, ${hora} horas, ${minuto} minutos y ${resto} segundos`
}
// dia = 86400
//semana = 604800 // 691200

let n = leerNumero()

console.log(calcularTiempo(n))