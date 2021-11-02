/***************************************************************************************************************
*  
*   Objetivo: Realizar un script que solicite una fecha a un usuario (día, mes y año) y compruebe es
*             correcta o existe. Hay que tener en cuenta que el año puede ser bisiesto, y por tanto, si es
*             bisiesto (divisible por 4 o por 400, pero no es divisible por 100), Febrero tendrá 29 días.
*
*   Entrada : dia, mes, anho
*
*
*   Salida  : La fecha dia/mes/anho (es|no es) correcta
*
*
***************************************************************************************************************/
function comprobarNumero(msg){
    let numero 
    do {
        numero = prompt(`Dame un ${msg}`)
    }while(isNaN(numero) || !Number.isInteger(parseFloat(numero)) || parseInt(numero)<0)
    return parseInt(numero)
}

/*Funcion para comprobar o ano bisiesto!!*/

function comprobarAnnoBisiesto(anno){
    if ((anno%4==0 && anno%100!=0) || anno%400==0){
        return true
    }else{
        return false
    }
}

function diaMaximo(mes,anno){
    let diaMax = 0
    switch(mes){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            diaMax = 31
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            diaMax=30
            break;
        default:
            console.log(comprobarAnnoBisiesto(anno))
            if(comprobarAnnoBisiesto(anno)){
                diaMax=29
            }else{
                diaMax=28
            }
    }
    return diaMax
}

function comprobarData(mes,dia,diamax,anno){
    if(mes>=1 && mes <=12){
        console.log(mes + " - " + dia + " - " + diamax + " - " + anno + " - ")
        if(dia>=1 && dia<=diamax){
            return `La fecha ${dia}-${mes}-${anno} es correcta`
        }else{
            return `La fecha ${dia}-${mes}-${anno} NO es correcta`
        }
    }else{
        return `La fecha ${dia}-${mes}-${anno} NI LOCO es correcta`
    }
}

let dia = 21
let mes = 5
let anno = 2000
let diajuicifinal = diaMaximo(mes,anno)
//console.log(diajuicifinal)
//console.log(comprobarData(mes,dia,diajuicifinal,anno))



//==================CON DATE==============\\

function compararDate(anno,mes,dia) {
    const d = new Date(anno,mes,dia)
    if(d.getFullYear() == anno && d.getMonth()==mes && d.getDate()==dia){
        console.log("Data correcta")
    }else{
        console.log("Data incorrecta")
    }
}
compararDate(anno,mes,dia)
