
 
const nombreInput = document.querySelector('#nombre')
const precioInput = document.querySelector('#precio')
const categoriaInput = document.querySelector('#categoria')
const idInput = document.querySelector('#id')
const formulario = document.querySelector('#formulario')

   

    document.addEventListener('DOMContentLoaded',async ()=>{
        const parametrosURL = new URLSearchParams(window.location.search)
        console.log(parametrosURL);

        const idProducto = parseInt(parametrosURL.get('id'))
        console.log(idProducto);
        
        const producto = await axios.get('/api/productos/edit-producto')
        console.log(producto);

        mostrarProducto(producto)

        formulario.addEventListener('submit',validarProducto)
    })

    function mostrarProducto(producto) {
        const {nombre,precio,categoria,id} = producto

        nombreInput.value = nombre
        precioInput.value = precio
        categoriaInput.value = categoria
        idInput.value = id

}

async function validarProducto(e) {
        e.preventDefault()
        const producto = {
            nombre: nombreInput.value,
            precio: precioInput.value,
            categoria: categoriaInput.value,
            id: parseInt(idInput.value )
        }
        
        if (validar(producto)) {
            //console.log('todos los campos son obligatorios');
            mostrarAlerta('todos los campos son obligatorios')
            return
        }else{
            console.log(producto);
            await editarProducto(producto)
            window.location.href = '/views/adminP/index.html'
            
        }
}

function validar(obj) {
        return !Object.values(obj).every(i=>i !=='')
}
