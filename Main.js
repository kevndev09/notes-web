//Invocamos nuestros elementos HTML por su id y class

const DIV = document.querySelector('#Listas')
const ARTICLE = document.querySelector('#nuevaLista')
const AÑADIR = document.querySelector('.añadir')
const BORRAR = document.querySelector('#borrar')
const RADIO = document.querySelector('#radio')
const LABEL = document.querySelector('label')
const tresPuntos = document.querySelector('#tresPuntos')
const verCumplidos = document.querySelector('.verCumplidos')
const modal = document.querySelector('#modal')
const añadirNota = document.querySelector('#añadirNota')
const cancelarNota = document.querySelector('#cancelarNota')
const divModal = document.querySelector('.modalContainer')

const objetivosCumplidos = DIV.querySelectorAll('.cumplidos')

let CrearLista = function() {
    const nuevaLista = ARTICLE.cloneNode(false)
    const form = document.createElement('form')
    const input1 = document.createElement('input')
    const input2 = document.createElement('input')
    const i = BORRAR.cloneNode(true)
    const hr = document.createElement('hr')
    const label = document.createElement('label')
    const ponTuNota = document.createElement('i')
    const p = document.createElement('p')
                                                        //Construyendo un nuevo modal que saldra dinamicamente
    const nuevoModal = document.createElement('div')
    const pregunta = document.createElement('p') 
    const divTextArea = document.createElement('div') 
    const nuevoTextArea = document.createElement('textarea')
    const divEvaluarNota = document.createElement('div')
    const aceptarNuevaNota = document.createElement('p')
    const cancelarNuevaNota = document.createElement('p')
    
    nuevaLista.setAttribute('id', 'nuevaLista')
    
form.setAttribute('name', 'inputs')

input1.setAttribute('type', 'radio')
input1.setAttribute('id', 'radio')
input1.setAttribute('name', 'inputs')
input1.className = 'd-none'

input2.setAttribute('type', 'text')
input2.setAttribute('placeholder', 'Ducharme mas seguido..')
input2.setAttribute('name', 'inputs')
input2.className = 'input'

i.className = 'bi bi-trash3-fill ms-2'
i.setAttribute('id', 'borrar')

ponTuNota.className = 'bi bi-journals'
ponTuNota.setAttribute('id', 'añadirNota')

nuevoModal.setAttribute('id','nuevoModal')

pregunta.setAttribute('class','p-1')
pregunta.innerText = 'Quieres añadir una nota?'

divTextArea.setAttribute('class','justify-content-center')
divTextArea.classList.add('d-flex')

nuevoTextArea.setAttribute('cols', '29')
nuevoTextArea.setAttribute('rows', '7')

divEvaluarNota.setAttribute('class', 'evaluarNota d-flex')

aceptarNuevaNota.innerText = 'Aceptar'
aceptarNuevaNota.className = 'fw-bold'
cancelarNuevaNota.innerText = 'Cancelar'
cancelarNuevaNota.className = 'fw-bold'

p.setAttribute('id', 'tuNota')
p.setAttribute('class', 'text-muted')

label.setAttribute('for', 'radio')
label.className = 'me-2'

nuevaLista.setAttribute('id','nuevaLista')

nuevaLista.appendChild(form)
nuevaLista.appendChild(label)
nuevaLista.appendChild(input1)
nuevaLista.appendChild(input2)
nuevaLista.appendChild(ponTuNota)
nuevaLista.appendChild(i)
nuevaLista.appendChild(p)
nuevaLista.appendChild(hr)

form.appendChild(input1)
form.appendChild(label)
form.appendChild(input2)
form.appendChild(ponTuNota)
form.appendChild(i)
form.appendChild(p)

DIV.appendChild(nuevaLista)

label.addEventListener('click', () => {
    label.style.backgroundColor = '#EF6D57'
    if(nuevaLista.className === 'cumplidos d-block'){
    } else{
    setTimeout(function(){
        nuevaLista.className = 'cumplidos d-none'
    },1310)
}
})

    i.addEventListener('click', () => {
        DIV.removeChild(nuevaLista)
    })
    
    function mostrarCumplidos(){
        if(nuevaLista.className === 'cumplidos d-none'){
            nuevaLista.className = 'cumplidos d-block'
            } 

        if(ocultarCumplidos.className === 'ocultarCumplidos d-none'){
            ocultarCumplidos.className = 'ocultarCumplidos d-block'
        }
        function ocultarCumplidoss(){
            if (nuevaLista.className === 'cumplidos d-block'){
                nuevaLista.className = 'cumplidos d-none'
                console.log('Lista ocultada');
            } 
        }
        ocultarCumplidos.addEventListener('click',ocultarCumplidoss)
    }

        //
        if (nuevaLista.className === 'cumplidos d-none') {
            nuevaLista.classList.replace('d-none','d-block')
        }

verCumplidos.addEventListener('click',mostrarCumplidos)


    ponTuNota.addEventListener('click', () => {

        console.log('nota añadida');
        
        nuevoModal.appendChild(pregunta)
        nuevoModal.appendChild(divTextArea)
        divTextArea.appendChild(nuevoTextArea)
        nuevoModal.appendChild(divEvaluarNota)
        divEvaluarNota.appendChild(cancelarNuevaNota)
        divEvaluarNota.appendChild(aceptarNuevaNota)
            console.log(nuevoModal);
            nuevoModal.classList.replace('d-none','d-block')
        divModal.appendChild(nuevoModal)
        
        window.scroll(500,2000)
    })

    aceptarNuevaNota.addEventListener('click',function(){
    nuevoModal.classList.add('d-none')

    ponTuNota.className = 'bi bi-journal-check'
    
    let nuevaNota = nuevoTextArea.value
    p.innerHTML = nuevaNota
})

cancelarNuevaNota.addEventListener('click',function(){
    nuevoModal.className = 'd-none'
})
}

AÑADIR.addEventListener('click', CrearLista)

//Estos listeners se ejecutaran sin importar si se crea o no una nueva lista

BORRAR.addEventListener('click', () => {
    DIV.removeChild(ARTICLE)
})

LABEL.addEventListener('click', () => {
LABEL.style.backgroundColor = '#EF6D57'
    if(ARTICLE.className === 'cumplidos d-block'){
        console.log('desabilitado');
    } else{
    setTimeout(function(){
        ARTICLE.className = 'cumplidos d-none'
    },1310)
}
})

const DIV2 = document.querySelector('#cont-trespuntos')
const ocultarCumplidos = document.querySelector('.ocultarCumplidos')
const ul = document.querySelector('ul')

function mostrarMenu() {
    if (ul.className === 'd-none') {
        ul.classList.replace('d-none', 'd-flex')
        ul.classList.add('flex-row', 'gap-3')
    }else {
        ul.className = 'd-none'
    }
}

añadirNota.addEventListener('click', function(){

    modal.classList.replace('d-none','d-block')
    window.scroll(500,3000)
})

const escribeTuNota = document.querySelector('#escribeTuNota')
const AceptarNota = document.querySelector('#AceptarNota')
const tuNota = document.querySelector('#tuNota')

AceptarNota.addEventListener('click', function() {

    modal.classList.replace('d-block', 'd-none')

    añadirNota.className = 'bi bi-journal-check'

    let nota = escribeTuNota.value
        tuNota.innerHTML = nota
})

cancelarNota.addEventListener('click', () => {

    modal.classList.replace('d-block', 'd-none')
})

verCumplidos.addEventListener('click',function(){
    if(ARTICLE.className === 'cumplidos d-none'){
            ARTICLE.className = 'cumplidos d-block'
            } 

        if(ocultarCumplidos.className === 'ocultarCumplidos d-none'){
            ocultarCumplidos.className = 'ocultarCumplidos d-block'
        }

        function ocultarCumplido(){
            if (nuevaLista.className === 'cumplidos d-block'){
                nuevaLista.className = 'cumplidos d-none'
            } 
        }
        ocultarCumplidos.addEventListener('click',ocultarCumplido)
})

if (typeof(Storage) !== "undefined") {
    alert('El almacenamiento local está disponible');
  } else {
    alert('El almacenamiento local no está disponible');
  }
  