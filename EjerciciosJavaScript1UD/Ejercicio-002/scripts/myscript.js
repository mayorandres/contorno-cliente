/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su nombre y mostrar un mensaje de bienvenida
*             en la página HTML
*
*
*   Entrada : nombre
*
*
*   Salida  : Bienvenido a mi página, XXXX   (XXXX será el nombre del usuario que visita la página)
*
*
***************************************************************************************************************/
function pedirNome() {
    let nome 
    nome = prompt("Cómo te chamas?")
    return nome    
}
// Funcion Arrow
const pedir = () => nome = prompt("Como te chamas neno?")
console.log(`Benvido á miña páxina, ${pedir()}`)