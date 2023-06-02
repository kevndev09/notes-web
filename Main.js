const itresPuntos = document.querySelector('#tresPuntos')
const menu = document.querySelector('.menu')

itresPuntos.addEventListener('click', () => {
  if (menu.className === 'd-none') {
    menu.classList.replace('d-none', 'd-flex')
    menu.classList.add('flex-row', 'gap-3')
}else {
    menu.className = 'd-none'
}
})

let borrar
let ocultarCumplidos
let mostrarCumplidos

function inicializar(nuevoObjetivo){
  
  const objetivos = document.querySelectorAll('.objetivo')
  mostrarCumplidos = document.querySelector('.mostrarCumplidos')
  const ocultarEliminados = document.querySelector('.ocultarEliminados')
  
  objetivos.forEach((objetivo) => {
    const añadirNotaIcono = objetivo.querySelector('.añadirNota')
    añadirNotaIcono.addEventListener('click', () => {
      agregarModal(objetivo)
      window.scroll(500,2000)
    })
  })

    const inputDefault = document.querySelector('.objetivo #radio')

    inputDefault.addEventListener("mouseenter", () => {
      inputDefault.focus()
    })

    inputDefault.addEventListener("mouseleave", () => {
      inputDefault.blur()
    })

    const AÑADIR = document.querySelector('.añadir')

AÑADIR.addEventListener('click',()=>{
  crearObjetivo()
  window.scroll(500,2000)
})

mostrarCumplidos.addEventListener('click', () => {
  cambiarEstado()
})

}

function mostrarObjetivosCumplidos(){
  const chekeadosOcultos = document.querySelectorAll('.checkeado')
  chekeadosOcultos.forEach((obj)=>{
  obj.classList.remove('d-none')
  obj.classList.add('d-block')
  })
  console.log('se mostro')
}
function cambiarEstado(){
  if(mostrarCumplidos.innerHTML === 'ver cumplidos'){
    mostrarCumplidos.innerHTML = 'ocultar'
    mostrarCumplidos.className = 'ocultarCumplidos'
    ocultarCumplidos = document.querySelector('.ocultarCumlidos')
    ocultar(ocultarCumplidos)
    mostrarObjetivosCumplidos()
  }else{
    mostrarCumplidos.innerHTML = 'ver cumplidos'
    mostrarCumplidos.className = 'mostrarCumplidos'
    ocultarObjetivosCumplidos()
  }
}

function ocultar(ocultarCumplidos){
  if(ocultarCumplidos){
   ocultarCumplidos.addEventListener('click', () => {
    ocultarObjetivosCumplidos()
   })
  }
}

function ocultarObjetivosCumplidos(){
    const cumplidos = document.querySelectorAll('.checkeado')
    cumplidos.forEach((obj)=>{
      obj.classList.remove('d-block')
      obj.classList.add('d-none')
    })
    console.log('se ocultaron los cumplidos');
}

document.addEventListener('DOMContentLoaded', function() {
    const objetivos = document.querySelectorAll('.objetivo');

    objetivos.forEach(inputTxt => {
      inputTxt.addEventListener("mouseover", () => {
        inputTxt.focus()
      })
    
      inputTxt.addEventListener("mouseout", () => {
        inputTxt.blur()
      })
    })

    ocultarCumplidos = document.querySelector('.ocultarCumplidos')
    ocultar(ocultarCumplidos)
    
    inicializar()
}
)

const DIV = document.querySelector('.cont-objectives')

function crearObjetivo() {
  const nuevoObjetivo = document.createElement('article')
  nuevoObjetivo.setAttribute('class', 'objetivo')

  nuevoObjetivo.innerHTML = `
    <form name="inputs">
      <input class="d-none" type="radio" name="inputs">
      <label for="radio" class="check"></label>
      <input class="input" type="text" id="radio"
      placeholder="...!" name="inputs">
      <i class="bi bi-journals añadirNota"></i>
      <i class="bi bi-trash3-fill borrar" onclick="borrarObjetivo(this.closest('.objetivo'))"></i>
    </form>
    <p class="tuNota text-muted"></p>
    <hr>
  </article>
  `
  DIV.appendChild(nuevoObjetivo)
  
  const iconoAñadirNota = nuevoObjetivo.querySelector('.añadirNota')
  iconoAñadirNota.addEventListener('click', () => {
    agregarModal(nuevoObjetivo)
  window.scroll(500,2000)
  })
}

function agregarModal(objetivoActual) {
  const contModal = document.querySelector('.contModal')
  const target = event && event.target
  if (!objetivoActual) {
    return
  }

  console.log('escribe tu nota...');
  if (document.querySelector('.estructuraModal')) {
    return
  }

  const modal = document.createElement('div');
  modal.className = 'estructuraModal d-flex justify-content-center'
  modal.innerHTML = `
    <div>
      <p class="fw-bold p-1">por qué es importante para ti?</p>
      <textarea class="textAreaModal" id="escribeTuNota" cols="29" rows="7"></textarea>
      <div class="d-flex flex-row justify-content-between">
        <p class="aceptarNota fw-bold">aceptar</p>
        <p class="cancelarNota fw-bold">cancelar</p>
      </div>
    </div>`
  contModal.appendChild(modal)


  const aceptarNota = modal.querySelector('.aceptarNota');
  const cancelarNota = modal.querySelector('.cancelarNota');

  aceptarNota.addEventListener('click', () => {
    const objetivo = objetivoActual
    if (objetivo) {
      const añadirNotaElement = objetivo.querySelector('.añadirNota');
      añadirNotaElement.classList.replace('bi-journals', 'bi-journal-check');
      modal.className = 'd-none'
      const textArea = modal.querySelector('.textAreaModal');
      const tuNota = añadirNotaElement.parentElement.nextElementSibling;
      tuNota.textContent = textArea.value
      console.log('nota aceptada')
    }
  }, { once: true });

  cancelarNota.addEventListener('click', () => {
    modal.className = 'd-none'
    console.log('nota cancelada')
  }, { once: true })
}

function borrarObjetivo(objetivo) {
    objetivo.className = 'eliminado d-none'
      console.log('eliminado');
  }

  document.addEventListener('click', function(event) {
    if (event.target.matches('.check')) {
      checkearObjetivo(event.target);
    }
  })

  function checkearObjetivo(label) {
    const objetivo = label.closest('.objetivo')
      console.log('check');
    if(objetivo !== null){
        label.style.backgroundColor = '#6DAFA7'
        setTimeout(()=>{
            objetivo.className = 'checkeado d-none'
        },1000)
  }
}
