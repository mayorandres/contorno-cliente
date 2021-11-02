/***************************************************************************************************************
*  
*   Objetivo: Adivina un número. Escojer aleatoriamente un número entero entre 1 y 100. Al abrir la página web 
*             debe ir solicitando números entre 1 y 100 hasta que el usuario acierte el número. 
*             Al finalizar el juego se indica mediante una ventana de alerta el número de intentos,
*             no teniendo en cuenta intentos en los que se introduce un dato incorrecto.
*
*   Entrada : un número entero (en cada intento)
*
*   Salida  : ! Has acertado ! Has necesitado XX intentos
*             ! Has fallado ! El número que tienes que adivinar es (mayor|menor)
*
***************************************************************************************************************/
const comprobarNumero = function(){
    let numero
    do{
        numero = prompt("Dame un numero")
    }while(isNaN(numero) || !Number.isInteger(parseFloat(numero)) || parseInt(numero)<0 || parseInt(numero)>100)
    return parseInt(numero) 
}


let numRandom = Math.floor(Math.random()*100)

function ahorcado(n2) {
    let contador = 0
    do{
        n = comprobarNumero()
        contador ++

        if(n == n2){
            document.write(`Has acertado! Te ha llevado ${contador} intentos`) 
            break;
        }else if(n < n2){
            document.write("Has fallado! El número que tienes que adivinar es mayor<br/>")
        }else{
            document.write("Has fallado ! El número que tienes que adivinar es menor<br />")
        }
    }while(n != n2)
    
}
ahorcado(numRandom)

