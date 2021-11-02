/***************************************************************************************************************
*  
*   Objetivo: Imprimir en la consola de depuración la suma de los números enteros entre 1 y n, donde n es un dato 
*             solicitado al usuario. Comprobar si esa suma coincide con n*(n+1)/2
*
*   Entrada : n
*
*   Salida  : La suma de 1+2+3+...n es XXXX
*
***************************************************************************************************************/
function comprobarNumero(){
    let numero
    do{
        numero = prompt("Dame un numero entero positivo y gallego")
    }while(isNaN(numero) || !Number.isInteger(parseFloat(numero)) || parseInt(numero)<0)
    return parseInt(numero)
}

let num = comprobarNumero()
const suma = (num) => {
    let suma = 0
    let salida = "La salida de "
    for(let i=1; i<num;i++){
        suma+=i
        salida +=i +"+"
    }
    salida += num+" "
    suma+=num
    salida+= `es ${suma}`
    return salida

}

function comprobacion(a,num){
    // a resultado de suma. num, numero de elementos
    let nEle = num *(num+1)/2
    if(a===nEle){
        return true
    }else{
        return false
    }
}
console.log(suma(num))
console.log(comprobacion(15,5))