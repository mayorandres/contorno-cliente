const formulario = document.querySelector("form")
const textArea = document.querySelector("#textArea")
const btn = formulario.querySelector("#submit")
const radio = formulario.querySelectorAll(".container")
const comentarios = document.querySelector("#comentarios")

/* const link = document.querySelector("#deleteNode") */

var contador = 1

btn.addEventListener('click',e=>{
    e.preventDefault
    chooseOption()
    
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
    comentarios.lastChild.remove()
    contador--
}

const chooseOption = () => {
    for(let i=0; i<radio.length;i++){
        if(radio[i].childNodes[1].checked){
            switch(true){
                case i == 0:
                    crearComentario()
                    break;
                case i == 1:
                    eliminarComentario()
                    break
                default:
                    console.log("pdt facer...")

            }
        }
    }
    
}
