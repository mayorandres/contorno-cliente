const formulario = document.querySelector("form")
const textArea = document.querySelector("#textArea")
const btn = formulario.querySelector("#submit")
const radio = document.getElementsByName("nodeAction")     // Los radio son excluyentes al tener el mismo name
const comentarios = document.querySelector("#comentarios")
const selectCtrl= document.querySelector("#grafCount")

// var contador = 1   Podemos cargarnos este contador si preguntamos por el número de articles

formulario.addEventListener('submit',e=>{
    e.preventDefault()  // Sirve para que no se realice la acción por defecto del evento.
    chooseOption()      // En este caso, el submit dse un formulario enviaría a procesar los datos
},false)                // al script php que figuraria en el action de la etiquetaq form y recargaria la página


const actualizarSelect = (eleccion) => {
    const articles=comentarios.querySelectorAll("article")
    if (eleccion) {
        const opcion=document.createElement("option")
        opcion.textContent=comentarios.querySelectorAll("article").length
        selectCtrl.appendChild(opcion)
    } else {
        if (selectCtrl.lastChild)
            selectCtrl.lastChild.remove()
    }
}

const crearComentario = () => {
    const articles=comentarios.querySelectorAll("article")
    const article = document.createElement("article")
    const h4 = document.createElement("h4")
    const cabecera = document.createTextNode(`Comentario ${articles.length+1}`)
    h4.appendChild(cabecera)
    //contador++
    const p = document.createElement("p")
    const texto = document.createTextNode(textArea.value)
    p.appendChild(texto)
    article.appendChild(h4)
    article.appendChild(p)
    comentarios.appendChild(article)
    formulario.reset()
    textArea.focus()

    // Tenemos que actualizar el select con id grafCount
    actualizarSelect(1)   // Añadimos una opcion al select
}

/*
// Eliminamos el ultimo comentario
const eliminarComentario = () => {
    if (comentarios.lastChild) {
        comentarios.lastChild.remove()
        actualizarSelect(0)  // Quitamos la ultima opción del select
        //contador--
    }
}
*/

const renombrarCabeceras=()=>{
    const articles=comentarios.querySelectorAll("article")
    if (articles) {
        articles.forEach((article,indice)=>{
            console.log(`Comentario ${indice+1}`)
            article.querySelector("h4").innerHTML=`Comentario ${indice+1}`
        })
    }
}

// Eliminamos el comentario indicado en la opcion escogida del select
const eliminarComentario = () => {
    const articles=comentarios.querySelectorAll("article")
    if (articles[selectCtrl.selectedIndex]) {      // El indice del option seleccionado en el select. Empieza en cero.
        articles[selectCtrl.selectedIndex].remove()
        renombrarCabeceras()
        actualizarSelect(0)  // Quitamos la ultima opción del select
        //contador--
    }
}

const chooseOption = () => {
    for(let i=0; i<radio.length;i++){
        if (radio[i].checked)
        switch(i){
            case 0:
                crearComentario()
                break;
            case 1:
                eliminarComentario()
                break
            default:
                console.log("pdt facer...")
            }
    }
    
}
