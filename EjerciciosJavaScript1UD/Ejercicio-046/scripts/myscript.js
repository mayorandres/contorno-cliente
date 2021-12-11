/***************************************************************************************************************
*  
*   Objetivo: Sumar vectores [1,2,3]+[2,3,4]=[3,5,7]
*             
*   Entrada : Dos grupos de números enteros separados por comas
*             Comprobar si son el mismo número de datos
*
*   Salida  : Muestra la suma de los vectores
*
*
***************************************************************************************************************/
let vec1 = [1,2,3]
let vec2 = [2,3,4]
function pedirNumeros(ent) {
    

}

function sumVectores(v1,v2) {
    if(v1.length == v2.length){
        let vector = Array.from({length:v1.length},el=>0)
        for(let i=0;i<v1.length;i++){
            vector[i] = v1[i] + v2[i]
        }
        console.log(vector)
    }else{
        console.log("Os arrays son de distinto tamaño.")
    }
}

sumVectores(vec1,vec2)