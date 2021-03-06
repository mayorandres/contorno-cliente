/***************************************************************************************************************
*  
*   Objetivo: Cuando vemos el pronóstico del tiempo en Estados Unidos no nos enteramos muy bien si va
*             a hacer frio o calor. Crear un script Javascript que solicite una temperatura en grados
*             Fahrenheit y la convierta a grados Celsius. El script puede realizar un comentario sobre el
*             tiempo dependiendo de si la temperatura Celsius es superior o igual a 25 grados, inferior a
*             10 o inferior cero grados. Ten en cuenta que la temperatura Celsius se calcula a través de
*             Celsius = (5/9) * (Fahrenheit-32)
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
function temperaturaEEUU(temperatura){
    let celsius=((5/9)*(temperatura-32)).toFixed(1)
    switch(true){
        case celsius<0:
            return `Abrígate muchísimo que estamos a ${celsius} grados`
        case celsius<10:
            return `Hace fresquete, ponte la camiseta que estamos a ${celsius}`
        case celsius>25:
            return `Estamos a ${celsius} grados, si tienes frío, vete al médico`
        default:
            return `En EEUU no existe la temperatura ${celsius} grados`
            
    }
}


console.log(temperaturaEEUU(60))