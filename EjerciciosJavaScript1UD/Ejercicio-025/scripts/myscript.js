/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número tras otro al usuario hasta que ingresamos el númoer 0 (que no se tendrá en cuenta)
*             Una vez terminada la lectura de números se informará cuál fue el mayor de los números
*
*   Entrada : numero1, numero2, numero3,.....
*
*
*   Salida  : El mayor de numero1, numero2, numero3,....
*
*
***************************************************************************************************************/
function leerNumero(){
    let numero
    do {
        numero = prompt("Dame un número")
    }while (isNaN(numero) || !Number.isInteger(parseFloat(numero)) || parseInt(numero) <0)
    return numero
}


function numeroMayor(listaNumeros){
    let max = 0
    for (let i=0; i<listaNumeros.length; i++){
        if (listaNumeros[i] > max){
            max = listaNumeros[i]
        }
    }
    return max
}

function recorrerArray(listado){ 
    let salida = "El mayor de: "
    for (let i=0; i<listado.length-1; i++){
        salida += listado[i]+", "
    }
    salida += listado[listado.length-1] + " es: "
    salida += numeroMayor(listado)
    return salida;
}

let numeros= new Array()
let num
do{
    
    num = leerNumero()
    if( num == 0){
        break;
    }
    numeros.push(num)
}while (num != 0)

console.log(recorrerArray(numeros))


