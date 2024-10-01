// Frontend
document.addEventListener('DOMContentLoaded', function() {
  const editarBtn = document.querySelector('#editar-btn')
  const nombreInput = document.querySelector('#nombre')
  const precioInput = document.querySelector('#precio')
  const categoriaInput = document.querySelector('#categoria')
  const idInput = document.querySelector('#id')
  const formulario = document.querySelector('#formulario')

  editarBtn.addEventListener('click', async () => {
    const parametrosURL = new URLSearchParams(window.location.search)
    const idProducto = mongoose.Types.ObjectId(parametrosURL.get('id'))

    const producto = await axios.get(`/api/productos/edit-producto/${idProducto}`)
    console.log(producto)

    mostrarProducto(producto)

    formulario.addEventListener('submit', async (e) => {
      e.preventDefault()
      const productoEditado = {
        nombre: nombreInput.value,
        precio: precioInput.value,
        categoria: categoriaInput.value,
        id: idInput.value
      }

      if (validar(productoEditado)) {
        mostrarAlerta('todos los campos son obligatorios')
        return
      } else {
        console.log(productoEditado)
        await editarProducto(productoEditado)
        window.location.href = '/admin/'
      }
    })
  })
})

function mostrarProducto(producto) {
  const { nombre, precio, categoria, id } = producto

  nombreInput.value = nombre
  precioInput.value = precio
  categoriaInput.value = categoria
  idInput.value = id
}

async function editarProducto(producto) {
  try {
    const response = await axios.put(`/api/productos/edit-producto/${producto.id}`, producto)
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

function validar(obj) {
  return !Object.values(obj).every(i => i !== '')
}