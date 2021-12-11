/***************************************************************************************************************
*  
*   Objetivo: Solicitamnos un número entero n positivo. Si n es par, se divide por 2 y su n es
*             impar se multiplica por tres y suma uno. El proceso se repite hasta que n tenga el valor de 1.
*             Por ejemplo, la secuencia para n=3 será:
*
*                  3--> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1
*
*   Entrada : numero entero n entre 1 y 100
*
*
*   Salida  : La secuencia de valores obtenida
*
*
***************************************************************************************************************/
const sayNumber = () => {
    let num
    do {
        num = prompt("Let me a number")
    } while (isNaN(num) || !Number.isInteger(parseFloat(num)) || parseInt(num)<0)
    return parseInt(num)
}

const repplace = function(ele) {
    for(let i=0;i<ele.length;i++){ele = ele.replace(",","-->")}
    return ele
}


function secNum(num) {
    numbers = []
    numbers.push(num)
    while(num!=1){
        if (num%2==0){
            num = num/2
            numbers.push(num)
        }else{
            num = (num *3 ) + 1
            numbers.push(num)
        }
    }
    str = repplace(numbers.toString())
    return str
}

console.log(secNum(3))