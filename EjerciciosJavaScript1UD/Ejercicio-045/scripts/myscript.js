/***************************************************************************************************************
*  
*   Objetivo: Mostrar los elementos comunes y no comunes de dos arrays de longitud n
*             Crear tres funciones: 
*                1.- Devuelve un array con los elementos comunes en los arrays
*                1.- Devuelve en un array los elementos del
*                    primer array que están en el segundo array
*                2.- Devuelve en un array los elementos del
*                    primer array que no están en el segundo array
*       
*             Rellenar los arrays con númeos aleatorios entre -100 y 100
*
*   Entrada : La longitud del array (numero entero n)
*
*   Salida  : Los elementos del Array1
*             Los elementos del Array2
*             Los arrays tienen XX elementos comunes: los elementos comunes
*             En el primer array no hay los siguientes elementos del segundo array: ...
*             En el segundo array no hay los siguientes elementos del primer array: ....
*
***************************************************************************************************************/
function aleatorio(min, max){
    return Math.round(Math.random() * (max - min) + min)
}
function checkDoubles(ar1, ar2) {
    let arr = []
    for(let i=0;i<ar1.length;i++){
        for(let a=0;a<ar2.length;a++){
            if(ar1[i]==ar2[a]){
                arr.push(ar1[i])
                break
            }
        }
    }
    return arr
}

let array1 = Array.from({length:10},(el)=>aleatorio(-10,10))
let array2 = Array.from({length:10},(el)=>aleatorio(-10,10))


const comunes=array1.filter(el=>array2.includes(el))
const noComunes=array1.filter(el=>!array2.includes(el))
//console.log(checkDoubles(array1,array2))
console.log(comunes)
console.log(noComunes)




