/***************************************************************************************************************
*  
*   Objetivo: Crear un array con n números aleatorios entre 1 y 100. Emplea para ello la función
*             random() del objeto Math. Mostrar por consola cual es el mayor, el menor y la media.
*
*   Entrada : n
*
*
*   Salida  : el mayor, el menor y la media de los números del array
*
*
***************************************************************************************************************/
function comprobarNumero(){
    let numero
    do{
        numero = prompt("Get me a number")
    }while (isNaN(numero) || !Number.isInteger(parseFloat(numero)) || parseInt(numero)<0)
    return parseInt(numero)
}
function crearArrayOrdenado(num){
    let listaNumeros= Array(num).fill(false)
    for(let i=0;i<listaNumeros.length;i++){
        listaNumeros[i] = Math.round(Math.random() * 100)
    }
    let max = listaNumeros[0]
    return listaNumeros.sort(function(a,b){
        return a - b;
    });
}


let num=comprobarNumero()

console.log(crearArrayOrdenado(num))

//=======OUTRAFORMA==========\\
const vector = Array.from({length:10}, () => Math.floor(Math.random()*100))

const ordenar = (array) => {
    return array.sort(function(a,b){
        return a - b;
    });

}
console.log(ordenar(vector))