//hacer el router
//router:es lo que hacemos para registrar POST, GET, DELETE
const userRouter = require('express').Router()
const User = require('../models/user')

//vamos a registrar la informacion que el usuario envia a traves del formulario
userRouter.post('/',(request,response)=>{
    const {name, email, password, password2} = request.body
    console.log(name,email,password, password2)

    if (!name || !email || !password || !password2 ) {
        return response.status(400).json({error:'todos los campos son requeridos'})        
    
    
    }else{
        //guardar en la bd
        let usuario = new User()
        usuario.name = name,
        usuario.email = email,
        usuario.password = password

        async function guardarUsuario(){
            await usuario.save()
            const usuarios = await User.find()
            console.log(usuarios)
        }
        guardarUsuario().catch(console.error)

        

        return response.status(200).json({msg:'se ha creado el nuevo usuario'})
    }
})

//consultar
userRouter.get('/consultar-user',async(req,res)=>{

})

//obtener lista de usuarios
userRouter.get('lista-user',async(req,res)=>{
    try{
        const listado = await User.find()
        return res.status(200).json({textOk:true,date:listado})
    }catch(error){
        return res.status(400).json({error:'ha ocurrido un error'})
    }
})

//editar usuario 
userRouter.post('edit-user',async(req,res)=>{
    try{
        const {name,email,password, password2,id} = req.body
        if(!name && !email && !password && !password2){
            return res.status(400).json({error:'todos los campos son obligatorios'})
        }else{
            const updateUser = await User.findOneAndUpdate({_id:id},{name:name, email:email, passowrd:password})

            await updateUser.save()

            return res.status(200),json({msg:'se ha actualizado los datos correctamente'})
        }

    }catch(error){
        return res.status(400).json({error:'error'})
    }
})

//eliminar usuario
userRouter.post('/delete-user',async(req,res)=>{
    const {id} = req.body

    try {
        const usuario = await User.deleteOne({_id:id})
        return res.status(200).json({msg:'se ha eliminado el usuario de forma correcta'})
    } catch (error) {
        return res.status(400).json({error:'error'})
    }
})

//verificar el registro
userRouter.get('/validar-confirmacion/:email',async(req,res)=>{
    try{
        //obtener los parametros
        const {email} = req.params
        console.log(email)

        //verificar si el usuario existe
        const usuario = await User.findOne({email:email})

        if(!usuario){
            res.send('error:el usuario no esta registrado')
        }else if(usuario.verified){
            res.send('error:el usuario ya esta verificado')
        }else{
            //actualizar verificacion
            const actualizarUsuario = await User.findOneAndUpdate({email:email},{verified:true})
            await actualizarUsuario.save()

            //redireccionar
            //return res.redirect()
            //falta crear front de confirmar
        }

    }catch(error){
        console.log(error)
    }
})


module.exports = userRouter;

