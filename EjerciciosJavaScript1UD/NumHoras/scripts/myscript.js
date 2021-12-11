/***************************************************************************************************************
*  
*   Objetivo: 
*
*
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
let patron = /^[0-9]{2}\/(0[0-9]{1}|1[0-2]{1})\/[0-9]{4}$/
//let patron = RegExp("^[0-9]{}2/[0-9]{2}/[0-9]{4}$")
function comprobarData() {
    let data
    do{
        numero = prompt("Dame unha data en formato dd/mm/aaaa")
    }while(!patron.test(numero))
    return numero
}

let fechote = comprobarData().split('/')
let fechote2 = comprobarData().split('/')
let horas = 0
let date = new Date(fechote[2],fechote[1],fechote[0])
let dateFin = new Date(fechote2[2],fechote2[1],fechote2[0])
// let dayIniWeek = date.getDay() // o día 26 é domingo (0)
// let dayFinWeek = dateFin.getDay() // tamén é domingo (0)

//Días entre o primeiro e o último.
let diff = (parseInt(dateFin.getTime()) - parseInt(date.getTime()))/(24000*3600)

while (date <= dateFin){
    let dayWeek = date.getDay()
    if(dayWeek == 1 || dayWeek == 3){
        horas +=2
    }else if( dayWeek == 5){
        horas +=1
    }
     

    console.log(date.getDate())
    date.setDate(date.getDate()+1)
}
console.log("total horas: " + horas)


//console.log(diff)


