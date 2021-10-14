/***************************************************************************************************************
*  
*   Objetivo: Mostrar la serie de fibonacci hasta el número indicado por el usuario
*             Cada elemento de la serie se calcula sumando los dos anteriores. Se empieza con 0 y 1
*
*   Entrada : n
*
*
*   Salida  : 0,1,1,2,3,5,8,13,....
*
*
***************************************************************************************************************/


function leerNumeroEnteroPositivo(){
    let numero
    do{
        numero = prompt("Dame un número")
    } while(isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0);
    return parseInt(numero)
}


function fibonacci(num){
    switch(num){
        case 0:
            return 0
        case 1:
            return 1
        default:
            return (fibonacci(num - 1) + fibonacci(num-2))
    }
}

function fibonacci2(num){
    let cad_fibonacci=[0,1]
    switch(num) {
        case 0: return cad_fibonacci[num]
        case 1: return cad_fibonacci
        default: for(let i=2;i<=num;i++)
                    cad_fibonacci.push(cad_fibonacci[i-1]+cad_fibonacci[i-2])
    }
    return cad_fibonacci
}

function fibonacci3(num){
    let x,y,z
    let salida=""
    x=0;y=1
    switch(num){
        case 0:
            return 0
        case 1:
            return 1
        default: for () {
            z=x+y
            x=y
            y=z
        }


    }
    return salida
}


let numero = leerNumeroEnteroPositivo()
//===== fibonacci 1 =====\\
let salida=" "
for (let i = 0;i<numero;i++){
    salida+=fibonacci(i)+","
}
salida+=fibonacci(numero)
//document.write(salida)

//===== fibonacci 2 =====\\
//document.write(fibonacci2(numero))

//===== fibonacci 3 =====\\

document.write(fibonacci3(numero))


