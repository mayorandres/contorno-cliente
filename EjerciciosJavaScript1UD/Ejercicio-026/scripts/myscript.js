/***************************************************************************************************************
*  
*   Objetivo: Solicita la fecha de nacimiento de una persona (dia, mes y año) y calcula el número de la suerte
*             El número de la suerte se calcula sumando las cifras obtenidas en la suma
*             Por ejemplo: si la fecha de nacimiento es el 12 de Julio de 1980
*                                  12+7+1980 = 1999
*                                  1+9+9+9 = 28    
*                                  2+8 = 10
*                                  1+0 = 1   <---- Número de la suerte
*
*   Entrada : dia, mes, anho
*
*
*   Salida  : Como has nacido el dia de mes de año, tu número de la suerte es XXX
*
*
***************************************************************************************************************/
function leerNumeroEnteroPositivo(){
    let numero
    do{
        numero=prompt("Dame fechas")
    }while(isNaN(numero) || !Number.isInteger(parseFloat(numero)) || parseInt(numero)<0)
    return numero
}


function calcularNumeroSuerte(dia,mes,anno){
    let sumaDatas = dia+mes+anno
    let stringData = sumaDatas.toString()
    
    while(stringData.length>1){
        sumaDatas=0
        for(let i=0;i<stringData.length;i++){
            sumaDatas +=parseInt(stringData[i])
        }
        stringData = sumaDatas.toString()
    }
    return sumaDatas
    
}

let dia = leerNumeroEnteroPositivo()
let mes = leerNumeroEnteroPositivo()
let anno = leerNumeroEnteroPositivo()
console.log(calcularNumeroSuerte(dia,mes,anno))