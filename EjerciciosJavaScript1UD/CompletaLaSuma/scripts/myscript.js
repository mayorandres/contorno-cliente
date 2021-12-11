/***************************************************************************************************************
*  
*   Objetivo: Son habituales los acertijos numéricos en los que los dígitos son sustituídos por letras y hay que descubrir esa sustitución.
*    El siguiente es uno de los más famosos, en el que se pide que se obtenga la relación entre letras y dígitos sabiendo que no hay
*    dos letras asignadas al mismo dígito:
*
*    SEND
*    + MORE
*    MONEY
*
*    Otros, mucho más sencillos, se limitan a poner una operación (por ejemplo una suma) y quitan algunos dígitos que son los que hay
*    que completar. Por ejemplo:
*
*    87-
*    + 2-1
*    1-63
*
*    Es fácil ver que en este caso la suma buscada es 872 + 291 = 1163. Hay veces que la respuesta no es tan directa. En ocasiones
*    el acertijo o no tiene solución o tiene varias:
*
*    87-
*    + 29-
*    1-63
*
*    87-
*    + 2-1
*    -63
*
*    En el acertijo de la izquierda hay dos soluciones (872 + 291 = 871 + 292 = 1163), mientras que en el de la derecha no existe ninguna.
*    ¿Eres capaz de hacer un programa que resuelva este tipo de acertijos?
*
**   Entrada : Los dos primeros corresponden a los sumandos, y el tercero al resultado.
*    Cada uno de los tres números tendrá siempre un único valor desconocido, representado por el carácter "-".
*    Ningún número tendrá más de 9 dígitos ni ceros superfluos a la izquierda. Además, los "-" deben siempre interpretarse como incógnitas,
*    es decir, no hay números negativos en la entrada.
*
*   Salida  : Se escribirá la suma buscada, con el mismo formato que en la entrada, pero sin valores desconocidos.
*    Para que la suma sea considerada correcta, todos los números deben tener la misma cantidad de dígitos que tenían en el planteamiento
*    del acertijo, y no deben tener ceros superfluos a la izquierda.
*    Si hay varias soluciones posibles se escribirá "VARIAS". Si no hay ninguna, se escribirá "IMPOSIBLE".
*
*    Entrada de ejemplo
*
*    87- 2-1 1-63
*    87- 29- 1-63
*    87- 2-1 -63
*    - - 2-
*    1- -1 -11
*
*    Salida de ejemplo
*
*    872 291 1163
*    VARIAS
*    IMPOSIBLE
*    IMPOSIBLE
*    IMPOSIBLE
***************************************************************************************************************/
function comprobacion(arr_) {
    nums = Array.from({length: 9}, (el,i) => i+1) // Creamos array do 1 ao 9
    let sumatorio = Array.from({length:3}, (el) => []) //Creamos un array vacío con 3 arrays dentro
    let contador = 0 // iniciamos un contador a 0 para saber en qué array estamos operando
    let resultado = "";
    
    //Recorremos o array que lle pasamos (no que temos os números para operar)
    arr_.forEach(el => {
        // Recorremos o array dos números 1 ao 9 para probar todas as posibilidades.
        for(let i=0; i<nums.length;i++){
            sumatorio[contador].push(parseInt(el.replace("-",nums[i]))) // Engadimos os números aos arrays internos de sumatorio
        }
        contador ++
    });
    // <!-- Procedemos a comprobar os números -->
    contador=0

    for(let i=0;i<sumatorio[0].length;i++){ //Recorremos o primeiro array
        let val1 = sumatorio[0][i] //gardamos cada valor nunha variable
        for(let j=0;j<sumatorio[1].length;j++){ // Recorremos o segundo array
            let val2 = sumatorio[1][j] // Gardamos cada valor nunha variable
            if(sumatorio[2].includes((val1+val2))){ //Comprobamos se a suma dos dous primeiros arrays está no 3ro array
                resultado = val1 +" " + val2 + " " + (val1+val2) //Gardamos os datos nun string
                contador++
            }
        }
    }

    // <!-- Procedemos a mostrar o resultado -->
    if(contador == 1){
        console.log(resultado)
    }else if(contador>1){
        console.log("VARIAS")
    }else{
        console.log("IMPOSIBLE")
    }
}

let entrada = "1- -1 -11"

let numeros = entrada.split(" ") //Temos o string 

comprobacion(numeros)


