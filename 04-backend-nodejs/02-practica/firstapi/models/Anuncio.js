'use strict'


const mongoose=require('mongoose')

const anuncioSchema = mongoose.Schema({
    nombre: {type: String, index:true},
    venta: Boolean,
    precio: {type: Number, index:true},
    foto: String,
    tags:[{type: String, index:true}]
})

anuncioSchema.statics.lista = function(nombre, venta, precio, tag, limit, sort, skip){

  const letrasNombre=new RegExp('^'+ nombre,'i')
    const query = Anuncio.find({
        //nombre: { $regex: /^paco/i } , 
        nombre: letrasNombre,
        venta:venta,
        precio: rangoPrecio(precio),
        tags: tag
    })
    query.limit(limit)
    query.sort(sort)
    query.skip(skip)
    
    return query.exec()
}

//Método que filtros para el rango del precio en funcion el precio recibido en la petición GET
const rangoPrecio = function(precio){
    if (precio === '10-50'){
        return {'$gte': '10', '$lte': '50'}
    }else if (precio === '10-'){
        return {'$gte': '10'}
    }else if (precio === '-50'){
        return {'$lte': '50'}
    }else if (precio === '50'){
        return precio
    }
}



const Anuncio = mongoose.model('Anuncio', anuncioSchema)

module.exports= Anuncio