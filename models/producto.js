//paso 1 conectar a mongodb, crear la dependencia 
const mongoose = require('mongoose')
const productoRouter = require('../controllers/productos')

//pas 2 definir el schema
const ProdcutoScheme = new mongoose.Schema({
    nombre:String,
    precio:String,
    categoria:String,
    verified:{
        type:Boolean,
        default:false
    }
})

//paso 3 configurar la respuesta del usuario en el schema
ProdcutoScheme.set('toJSON',{
    //document es el schema que estamos reciviendo
    //returnobj es lo que estamos solicitando
    transform:(document,returnObject)=>{
        //estamos creando una nueva propiedad que se llame id
        returnObject.id = returnObject._id.toString()
        delete returnObject._id;
        delete returnObject.__v;
    }
})

//paso 4 dar un nombre y registrar el modelo de datos 
const Producto = mongoose.model('Producto', ProdcutoScheme)
//se exporta      
module.exports = Producto;