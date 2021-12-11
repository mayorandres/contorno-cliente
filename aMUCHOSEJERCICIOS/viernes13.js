// Funciones

function tieneViernes13(mes,anno){
    const VIERNES13 = 5
    const date = new Date(anno,mes-1,13)
    return (date.getDay() == VIERNES13)?true:false;
}

console.log(tieneViernes13(3,2020))
console.log()