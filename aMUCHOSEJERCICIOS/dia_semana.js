function obtenerDia(fecha) {
    const dias=["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado"]
    const array = fecha.split("/")
    let date = array[2]+"-"+array[1]+"-"+array[0]
    let date_usa = new Date(date)
    return dias[date_usa.getDay()]
}
function insertar_fecha(){
    let patron = /^[0-9]{2}\/(0[0-9]{1}|1[0-2]{1})\/[0-9]{4}$/
    let date
    do{
        date = prompt("Escribe unha fecha dd/mm/aaaa")
    }while(patron.test(date))
    return date
}

let dateStr = insertar_fecha()
console.log(obtenerDia(dateStr))


