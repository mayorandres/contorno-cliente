/***************************************************************************************************************
*  
Chicles de regalo

Para tener contentos a los niños y de paso intentar que no tiren al suelo los envoltorios de los chicles, la empresa BubbaGum ha
decidido dar chicles gratis a aquellos que lleven los envoltorios de otros chicles ya consumidos.

Ha empezado regalando un chicle por cada cinco envoltorios. Eso significa que si compramos 25 chicles podremos en realidad disfrutar
de 31: al comernos los 25 comprados tendremos 5 chicles más gratis con los que conseguimos otros 5 envoltorios adicionales con los que
podemos ir a la tienda a por otro más. Si la estrategia funciona, la empresa probará a realizar otras ofertas.

La pregunta que nos hacemos es ¿cuántos chicles nos podremos comer según la oferta que haya en ese momento?

Entrada
Cada caso de prueba está compuesto de una única línea que tiene tres números enteros (no mayores de 109) separados por espacios.
Los dos primeros números indican cuántos envoltorios se necesitan para que nos den qué cantidad de chicles.
El tercer número indica el número de chicles que compramos inicialmente. Ninguno de esos números será negativo;
el primero, además, será siempre mayor que cero. Los casos de prueba terminan cuando los tres son cero.

Salida
Para cada caso de prueba se escribirá una línea que tendrá, a su vez, dos números. El primero indicará el número total de chicles
que nos comemos, y el segundo con cuántos envoltorios nos quedamos al final.

Si la oferta hace que la empresa se arruine con nosotros se escribirá RUINA. Se considerará que la empresa va a la ruina cuando
tenga que regalarnos chicles de forma indefinida.

Entrada de ejemplo
5 1 25
5 1 5
10 1 100
2 5 20
0 0 0

Salida de ejemplo
31 1
6 1
111 1
RUINA 
*
***************************************************************************************************************/

function pedirNumeros(){
    let patreon = /^([0-9]{2}|[0-9])-[0-9]-[0-9]{2}$/
    let numeros
    do{
        numeros = prompt("Pasa numeros separados por espacios")
    }while(!patreon.test(numeros))

    return numeros
}

let numeros = "5-1-25"
let chicles = numeros.split("-")

let num_tot_chi = chicles[2]
let chicles_mayores = chicles[2]/chicles[0]

while(chicles_mayores/chicles[0] >= 1){
    chicles_mayores = chicles[2]/chicles[0]
    num_tot_chi+=chicles_mayores
}

console.log(chicles_mayores,chicles)




