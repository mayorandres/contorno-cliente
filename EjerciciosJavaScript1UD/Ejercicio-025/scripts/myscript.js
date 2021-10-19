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
    }while (isNaN(numero) || !Number.isInteger(parseFloat(numero)))
    return numero
}


//function numeroMayor(listaNumeros){
//    let max = listaNumeros[0]
//    for (let i=1; i<listaNumeros.length; i++){
//        max = (listaNumeros[i]> max)? listaNumeros[i]: max
//    }
//    return max
//}

function numeroMayor(){
    let num

    num = leerNumero()
    let max=-Infinity
    while(num!=0) {
        max = (num>max)?num:max
        num = leerNumero()
        console.log(num,max)
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

let num = numeroMayor()