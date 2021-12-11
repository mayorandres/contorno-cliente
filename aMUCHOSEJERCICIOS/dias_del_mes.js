// Funciones

function diasDelMes(mes,anno){
    let date = new Date(anno,mes-1)
    console.log(date.getMonth()+1)
    switch(date.getMonth()){
        case 1,3,5,7,8,10,12:
            console.log(31)
            return 31
        case 4,6,9,11:
            return 30
        case 2:
            return (anno%400 == 0 )? 29: 
                (anno%100 == 0 && anno%4== 0)? 28:29
    }
}

console.log(diasDelMes(1,2004))