
const listado = document.querySelector('#listado-Productos')
const cerrarBtn = document.querySelector('#cerrar-btn')



document.addEventListener('DOMContentLoaded', mostrarProductos)
listado.addEventListener('click', confirmarEliminar)
cerrarBtn.addEventListener('click', async e => {
    localStorage.removeItem('productos') // fix: use removeItem instead of remove
})


async function mostrarProductos() {
    console.log("PEPE");
    
    const response = await axios.get('/api/productos/lista-producto');
    const p = response.data;
    const productos = p.data
    //console.log(productos.data);

    

    productos.forEach(i => {
        const { nombre, precio, categoria, id } = i
        const row = document.createElement('tr')
        //console.log(id);
        
        row.innerHTML += `
        <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
            <p class="text-gray-700 font-medium text-lg
            leading-5">${nombre}</p>
        </td>

        <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
            <p class="text-gray-700 font-medium text-lg
            leading-5">${precio}</p>
        </td>
        <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
            <p class="text-gray-700 font-medium text-lg
             leading-5">${categoria}</p>
        </td>

        <td class="py-4 px-6 border-b border-gray-200 whitespace-no-wrap">
            <a href="/editar?id=${id}"
            class="text-teal-600 mr-5 
            hover:text-teal-900">Editar</a>
            <a href="#" producto="${id}"
            class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
        </td>
        `
        listado.appendChild(row)
    });
}

async function confirmarEliminar(e) {
    if (e.target.classList.contains('eliminar')) {
        const productoId = parseInt(e.target.dataset.producto)
        console.log(productoId);

        const confirmar = confirm('Quieres eliminar el producto?')

        if (confirmar) {
          // Use the eliminarProducto route from the productoRouter
          await axios.post(`/api/productos/delete-producto/${productoId}`);
        }
    }
}