/***************************************************************************************************************
*  
*   Objetivo: Solicitamos al usuario su peso (en kg) y su estatura (en metros). Calculamos el índice de masa 
*             corporal, lo almacene en una variable y muestre por pantalla la frase "Tu índice de masa corporal 
*             es <imc>", donde <imc> corresponde al indice de masa corporal redondeado con dos decimales e indique
*             si hay riesgo de enfermedad coronaria.
*
*             El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
*             estatura en metros.        
*
*             El riesgo de que una persona sugra enfermedades coronarias depende de su edad y su índice de masa
*             corporal:
*                               Edad<45     Edad>=45
*                   IMC<=22.0    bajo         medio
*                   IMC>=22.0    medio        alto
*
*   Entrada : peso, estatura
*
*
*   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
*
*
***************************************************************************************************************/
function leerNumeroEnteroPositivo(){
    let num
    do{
        num =  prompt("Dame el peso (en kg)")
    }while(isNaN(num) || !Number.isInteger(parseFloat(num)) || !parseInt(num))
    return num
}

function leerEstatura(){
    let numero
    do{
        numero = prompt("Dame la altura en metros")
    }while(isNaN(numero) || parseFloat(numero)<0.0)
}

function imc(n1,n2){
    let imc = n1/n2**2
    
}

let peso = leerNumeroEnteroPositivo()
let estatura = leerEstatura()


