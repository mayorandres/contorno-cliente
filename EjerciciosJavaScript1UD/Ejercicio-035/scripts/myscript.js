/***************************************************************************************************************
*  
*   Objetivo: Juan y su familia se fueron en vacaciones a 3 restaurantes diferentes. Las facturas fueron de
*             XX, YY y ZZ euros. Para darle al camarero una propina justa Juan se otorgará un 20% de la factura 
*             como propina si la factura es menor de 50 euros, 15% si esta entre 50 y 200 euros y 10% si es mayor 
*             de 200 euros. 
*
*   Entrada : Tres valores reales que representa las facturas, p.ej.: 124, 48, 268 euros
*
*
*   Salida  : Mostrar por consola el valor de cada factura con el valor apropiado de propina
*
*
***************************************************************************************************************/

let factura1={
    restaurante:"El rey del bocadillo",
    importe:124,
    propina: calcularPropina(this.importe)
}
console.log(typeof(factura1.importe));

let factura2={
    restaurante:"El barato",
    importe:48,
    propina: calcularPropina(parseInt(this.importe))
}

let factura3={
    restaurante:"El esquisito",
    importe:268,
    propina: calcularPropina(268)
}

function calcularPropina(cantidad) {
   switch(true) {
       case cantidad<=50:return 0.2*cantidad
       case cantidad>50||cantidad<=200:return 0.15*cantidad
       case cantidad>200:return 0.10*cantidad
   }
}

let facturas=[factura1,factura2,factura3]
for (factura of facturas) {
  console.log(`En el restaurante ${factura.restaurante} hemos gastado ${factura.importe} y dejamos de propina ${parseInt(factura.importe)}`)
}

/*
let numeros=Array.from({length:11},(el,i)=>i)

let pares=numeros.filter(el=>el%2==0)
let cuadrados=numeros.map(el=>el*el)
console.log(numeros.reduce((anterior,actual)=>anterior+actual))
console.log(cuadrados)

console.log(facturas.reduce((anterior,actual)=>{return {importe:anterior.importe+actual.importe} }).importe)
*/