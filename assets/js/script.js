// capturamos el elemento (div en este caso)
const ele = document.getElementById("ele1")
ele.style.backgroundColor = "green"

function pintar(elemento, color){
  ele.style.backgroundColor = color
}

// asignamos el escuchador al evento click del mouse
ele.addEventListener("click", function() {
  pintar(ele, "yellow")
})

