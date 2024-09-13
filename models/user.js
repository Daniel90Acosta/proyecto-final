//paso 1 conectar a mongodb, crear la dependencia 
const mongoose = require('mongoose')
const userRouter = require('../controllers/users')

//pas 2 definir el schema
const userScheme = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    verified:{
        type:Boolean,
        default:false
    }
})

//paso 3 configurar la respuesta del usuario en el schema
userScheme.set('toJSON',{
    //document es el schema que estamos reciviendo
    //returnobj es lo que estamos solicitando
    transform:(document,returnObject)=>{
        //estamos creando una nueva propiedad que se llame id
        returnObject.id = returnObject._id.toString()
        delete returnObject._id;
        delete returnObject.__v;
        delete returnObject-password;
    }
})

//paso 4 dar un nombre y registrar el modelo de datos 
const User = mongoose.model('User', userScheme)
//se exporta      
module.exports = User;