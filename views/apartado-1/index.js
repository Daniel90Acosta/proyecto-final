const listado = document.querySelector('#listado-Productos')

document.addEventListener('DOMContentLoaded', mostrarProductos)
listado.addEventListener('click', confirmarEliminar)


async function mostrarProductos() {
    console.log("PEPE");
    
    const response = await axios.get('/api/productos/lista-producto');
    const p = response.data;
    const productos = p.data
    console.log(productos.data);

    const categoriaEspecifica = '1'; // Replace with the desired category
    const productosFiltrados = productos.filter(i => i.categoria === categoriaEspecifica);
    

    productosFiltrados.forEach(i => {
        const { nombre, precio, categoria,id } = i
        const row = document.createElement('div')

        row.innerHTML += `

        <div class=" border-2 rounded-lg py-8 px-4 shadow-2xl my-8">
                <div class="">
                    <img src="/images/producto.avif" class="object-cover h-48 w-96">
                      <div class="flex flex-col space-y-4">
                          <h4 id="nombre" name="nombre" type="text">${nombre}</h4>
                          <p class="precio" id="precio" name="precio" type="precio">Precio:${precio}$</p>
                          <a href="#?id=${id}" class="bg-blue-500 text-white hover:bg-blue-600 font-bold rounded-lg  py-2 px-2 text-center" data-id="1">Agregar Al Carrito</a>
                      </div>
                </div> <!--.card-->
        </div>
        `
        listado.appendChild(row)
    });
}