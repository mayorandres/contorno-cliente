const formulario = document.querySelector("form")
const textArea = document.querySelector("#textArea")
const btn = formulario.querySelector("input")
const comentarios = document.querySelector("#comentarios")
const contenedor = document.querySelectorAll(".container")
/* const link = document.querySelector("#deleteNode") */

var contador = 1
console.log(contenedor.firstElementChild)

btn.addEventListener('click',e=>{
    e.preventDefault()
    if(contenedor.firstChild.value != null){
        crearComentario()
    }
    
},false)

/* link.addEventListener('click',e=>{
    e.preventDefault() //Sirve para que non faga o evento de ir a outra páxina.
    eliminarComentario();

}) */

const crearComentario = () => {
        const article = document.createElement("article")
        const h4 = document.createElement("h4")
        const cabecera = document.createTextNode("Comentario "+ contador)
        h4.appendChild(cabecera)
        contador++
        const p = document.createElement("p")
        const texto = document.createTextNode(textArea.value)
        p.appendChild(texto)
        article.appendChild(h4)
        article.appendChild(p)
        comentarios.appendChild(article)
        formulario.reset()
        textArea.focus()
}

const eliminarComentario = () => {
    comentarios.firstChild.remove()
}
