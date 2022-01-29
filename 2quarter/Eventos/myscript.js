const btn= document.querySelector('button')
const img = document.querySelector('img')

btn.addEventListener('click', e=>{
    if(e.target.textContent=="Pulsado!"){
        e.target.textContent="Ook!"
    }else{
        e.target.textContent="Pulsado!"
    }
    e.target.classList.toggle('pulsado')
})

documento.addEventListener('_DOMContent')