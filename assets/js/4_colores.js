// Pintamos los 4 div's
const div_uno = document.querySelector(".div_uno")
const div_dos = document.querySelector(".div_dos")
const div_tres = document.querySelector(".div_tres")
const div_cuatro = document.querySelector(".div_cuatro")

// Funcion para pintar de negro
function pintarNegro(ele){
  ele.style.background = "black"
}

div_uno.addEventListener("click", () => {
  pintarNegro(div_uno)
})

div_dos.addEventListener("click", () => {
  pintarNegro(div_dos)
})

div_tres.addEventListener("click", () => {
  pintarNegro(div_tres)
})

div_cuatro.addEventListener("click", () => {
  pintarNegro(div_cuatro)
})

// capturamos el elemento "key"
const div_key = document.querySelector("#key")

document.addEventListener("keydown", function(event){
  if (event.key === 'a'){
    div_key.style.background = "pink"
  }else if (event.key === 's'){
    div_key.style.background = "orange"
  }else if (event.key === 'd'){
    div_key.style.background = "LightBlue"
  }
})


// capturamos el container al que queremos agregarle un child
const contenedor = document.querySelector(".contenedor")

// Funcion de creacion de nuevo div
function crearNuevoDiv(color){
  const nuevoDiv = document.createElement('div')

  nuevoDiv.style.width = "200px"
  nuevoDiv.style.height = "200px"
  nuevoDiv.style.backgroundColor = color
  nuevoDiv.style.margin = "10px"
  contenedor.appendChild(nuevoDiv)
}

document.addEventListener("keydown", function(event){
  if (event.key === 'q'){
    crearNuevoDiv("violet")
  }else if (event.key === 'w'){
    crearNuevoDiv("grey")
  }else if (event.key === 'e'){
    crearNuevoDiv("brown")
  }
})