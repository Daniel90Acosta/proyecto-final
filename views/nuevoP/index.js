const nombre = document.querySelector('#nombre')
const precio = document.querySelector('#precio')
const categoria = document.querySelector('#categoria')
const notification = document.querySelector('#notificacion')
import { createNotification } from "../components/notificaciones.js"; 

let valnombre = false
let valprecio = false
let valcategoria = false

formulario.addEventListener('submit',async e=>{
    e.preventDefault();

    try {
        const newProducto ={
            nombre:nombre.value,
            precio:precio.value,
            categoria:categoria.value,
            
        }   
        console.log(newProducto);

        if (nombre.value.trim() !== '') {
            valnombre = true;
          } else {
            valnombre = false;
          }
          
          if (precio.value.trim() !== '') {
            valprecio = true;
          } else {
            valprecio = false;
          }
          
          if (categoria.value.trim() !== '') {
            valcategoria = true;
          } else {
            valcategoria = false;
          }

        if (valnombre && valprecio && valcategoria ) {
            createNotification(false,'registro correcto')
            const response = await axios.post('/api/productos',newProducto)
            console.log(response);

            setTimeout(() => {
                if (notification) {
                    notification.innerHTML = '';
                }
            }, 3000);

        }else{
            createNotification(true,'alguno de los campos no cumple con los requerimientos solicitados')
        }


    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            createNotification(true, error.response.data.error);
        } else {
            console.error('Error desconocido:', error);
        }
        setTimeout(() => {
            if (notification) {
                notification.innerHTML = '';
            }
        }, 3000);
        console.log(error);
        
    }

})