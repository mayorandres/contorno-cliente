/***************************************************************************************************************
*  
*   Objetivo: Crea un script Javascript que solicite el nombre a un usuario y su edad al abrir la página.
*
*
*   Entrada : cadena de texto, numero: nombre, edad
*
*
*   Salida  : Tiene que mostrar la información solicitada a través de la consola de depuración
*                       Tu nombre es .... y tienes .... años
*
*
***************************************************************************************************************/
const pedirDatos =()=>{
    let edad
    do{
        edad = prompt("Que edad tes: ")
    }while(isNaN(edad) || !Number.isInteger(parseFloat(edad)) || parseInt(edad)<0)
    return edad 
}
let nome = prompt("Como te chamas: ")
let datos=pedirDatos()
console.log(nome,datos)