// Guardar el estao (column active)
let columnActive = 1

// Seleccionar las columnas
const columns = document.querySelectorAll(".column")

// Recorrer y escuchar el "click" en cada una de las columnas

columns.forEach((column, indice) => {
    column.addEventListener("click", function() {
        cambiarColumn(indice)
    })
})

// Cambiar el estado de las columnas
function cambiarColumn(indice) {
    columns[columnActive].classList.remove("active")
    columns[indice].classList.add("active")
    columnActive = indice
}


