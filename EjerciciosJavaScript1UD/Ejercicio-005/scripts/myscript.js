/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página dos números enteros y mostrar en la página HTML el resultado de 
*             sumarlos, restarlos, multiplicarlos y dividirlos
*
*
*   Entrada : Dos números enteros: numero1, numero2
*
*
*   Salida  : La suma de numero1 y numero2 es: numero1+numero2 
*             La resta de numero1 y numero2 es: numero1-numero2 
*             El producto de numero1 y numero2 es: numero1*numero2 
*             La division de numero1 entre numero2 es: numero1/numero2 
*
*   Notas   : Ten en cuenta que la división entre los números puede dar un número con muchos decimales
*             ¿Cómo podemos limitar el número de decimales que se mostrarán?
*
***************************************************************************************************************/
const pedirNumero = () => {
    let num
    do{
        num = prompt("Dame un número")
    }while(isNaN(num) || !Number.isInteger(parseFloat(num)) || parseInt(num)<0)
    return parseInt(num)
}

function operar(num1, num2){
    return `La suma de ${num1} y ${num2} es: ${(num1+num2)} 
            La resta de ${num1} y ${num2} es: ${(num1-num2)} 
            El producto de ${num1} y ${num2} es: ${(num1*num2)} 
            La division de ${num1} entre ${num2} es: ${(num1*num2)}  `
}



console.log(operar(pedirNumero(),pedirNumero()))