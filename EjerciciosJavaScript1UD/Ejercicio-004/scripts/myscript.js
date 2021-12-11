/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su nombre y mostrar un mensaje de bienvenida
*             mediante una ventana de alerta
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
alert(`Benvido á miña páxina, ${pedir()}`)