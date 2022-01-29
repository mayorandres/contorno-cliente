/*
<div class="tarea">
    <p>Hacer la cama</p>
    <button class="terminada">Terminada</button>
    <button class="eliminar">Eliminar</button>
</div>

*/

const formulario = document.querySelector("form")
const divTareas = document.querySelector("#tareas")
const tareas=[]

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    tarea={
        id:new Date().getTime(),
        texto: e.target.tarea.value,
        estado:false,
    }
    tareas.push(tarea)
    formulario.reset()
    e.target.tarea.focus()
    pintarTareas()
    console.log(tareas)
})
function pintarTarea(){
    const div = document.createElement("div")
    div.classList.add("tarea")
    const p = document.createElement("p")
    const texto = document.createTextNode(tareas[tareas.length-1].texto)
    p.appendChild(texto)

    const btn1 = document.createElement("button")
    btn1.classList.add("terminada")
    btn1.innerHTML="Terminada"
    btn1.dataset.id=tareas[tareas.length-1].id

    const btn2 = document.createElement("button")
    btn2.classList.add("eliminar")
    btn2.innerHTML="Eliminar"
    btn2.dataset.id=tareas[tareas.length-1].id


    div.appendChild(p)
    div.appendChild(btn1)
    div.appendChild(btn2)

    divTareas.appendChild(div)
}

/* divTareas.addEventListener("click",e=>{
    const ctlTareas = Array.from(divTareas.querySelectorAll(".tarea"))
    if(e.target.classList.contains("eliminar")){
        const borrar = ctlTareas.find(el=>{
            const botones = Array.from(el.querySelectorAll(".eliminar"))
            return (botones.filter(el=>el.dataset.id==e.target.dataset.id).length)
        })
        divTareas.removeChild(borrar)
    }else{

    }
})
 */
//añadirtareas y cambiar el metodo de arriba
function pintarTareas(){
    const templateTarea=document.querySelector("#template-tarea").content
    const fragmento=document.createDocumentFragment()

    divTareas.innerHTML=""
    for(i=0;i<tareas.length;i++){
        const unaTarea = templateTarea.cloneNode(true)
        const texto = document.createTextNode(tareas[i].texto)
        const p = unaTarea.querySelector("p")
        p.appendChild(texto)

        if(tareas[i].estado){
            p.style.textDecoration="line-through"
        }else{
            p.style.textDecoration="none"
        }
        
        const btn1 = unaTarea.querySelector(".terminada")
        btn1.dataset.id=tareas[i].id

        const btn2 = unaTarea.querySelector(".eliminar")
        btn2.dataset.id=tareas[i].id


        fragmento.appendChild(unaTarea)
    }
    divTareas.appendChild(fragmento)
}

divTareas.addEventListener("click",e=>{
    const ctlTareas = divTareas.querySelectorAll(".tarea")
    if(e.target.classList.contains("eliminar")){
            tareas.splice(tareas.findIndex(el=>el.id==e.target.dataset.id),1)
            pintarTareas()    
        }else{
            tareas.find(el=>el.id==e.target.dataset.id).estado = !tareas.find(el=>el.id==e.target.dataset.id).estado
            pintarTareas()
    }
})