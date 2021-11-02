/***************************************************************************************************************
*  
*   Objetivo: Calcula la suma de los pares y de los impares de elementos de n elementos de un array generados
*             aleatoriamente entre 1 y 10.
*
*
*   Entrada : n
*
*
*   Salida  : Los elementos pares del array son: x1, x2, x3, ...
*             Los elementos impares del array son: x1, x2, x3, ...
*             La suma de los elementos pares del array es: XXXX
*             La suma de los elementos impares del array es: YYYY
*
***************************************************************************************************************/
function comprobarNumero(){
    let num 
    do{
        num = prompt("Dame un número")
    }while(isNaN(num) || !Number.isInteger(parseFloat(num)) || parseInt(num) <0)
    return parseInt(num)
}

function crearArrayConDatos(num){
    let datos = Array(num).fill(false)
    for(let i=0;i<datos.length;i++){
        datos[i] = Math.round(Math.random() *(10 - 1)+1)
    }
    return datos
}

function contarElementos(array){
    let numI = 0; let numP = 0; //numerosImpares e numerosPares
    let datosI = []; let datosP = []
    array.forEach(element => {
        if(element%2 == 0){
            numP+=element
            datosP.push(element)
        }else{
            numI+=element
            datosI.push(element)
        }
    });
    return `
    Los elementos pares del array son: ${datosP.toString()}
    Los elementos impares del array son: ${datosI.toString()}
    La suma de los elementos pares del array es: ${numI}
    La suma de los elementos impares del array es: ${numP}
    `
    
}


console.log(contarElementos(crearArrayConDatos(9)))