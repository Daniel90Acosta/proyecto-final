//hacer el router
//router:es lo que hacemos para registrar POST, GET, DELETE
const productoRouter = require('express').Router();
const Producto = require('../models/producto')



//vamos a registrar la informacion que el usuario envia a traves del formulario
productoRouter.post('/',(request,response)=>{
    const {nombre, precio, categoria,} = request.body
    console.log(nombre,precio,categoria)

    if (!nombre || !precio || !categoria) {
        return response.status(400).json({error:'todos los campos son requeridos'})        
    
    
    }else{
        //guardar en la bd
        let producto = new Producto()
        producto.nombre = nombre,
        producto.precio = precio,
        producto.categoria = categoria

        async function guardarProducto(){
            await producto.save()
            const productos = await Producto.find()
            console.log(productos)
        }
        guardarProducto().catch(console.error)

        return response.status(200).json({msg:'se ha creado el nuevo producto'})
    }
})

//consultar
/*productoRouter.get('/consultar-producto',async(req,res)=>{
    try {
        const productos = await Producto.find().exec()
        console.log(productos)
        return res.status(200).json({ textOk: true, date: productos })
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: 'no se encotraron los productos' });
    }
})*/

//obtener lista de usuarios
productoRouter.get('/lista-producto', async (req, res) => {
    try {
        const listado = await Producto.find()
        return res.status(200).json({ textOk: true, data: listado })
    } catch (error) {
        return res.status(400).json({ error: 'ha ocurrido un error' })
    }
})

//editar usuario 
productoRouter.post('/edit-producto',async(req,res)=>{
    try{
        const {nombre,precio,categoria,id} = req.body
        if(!nombre && !precio && !categoria){
            return res.status(400).json({error:'todos los campos son obligatorios'})
        }else{
            const updateProducto = await Producto.findOneAndUpdate({_id:id},{nombre:nombre, precio:precio, categoria:categoria})

            await updateProducto.save()

            return res.status(200),json({msg:'se ha actualizado los datos correctamente'})
        }

    }catch(error){
        return res.status(400).json({error:'error'})
    }
})

//eliminar producto
productoRouter.post('/delete-producto/:id',async(req,res)=>{
    const {id} = req.body

    try {
        const producto = await Producto.deleteOne({_id:id})
        return res.status(200).json({msg:'se ha eliminado el usuario de forma correcta'})
    } catch (error) {
        return res.status(400).json({error:'error'})
    }
})



    


module.exports = productoRouter;

