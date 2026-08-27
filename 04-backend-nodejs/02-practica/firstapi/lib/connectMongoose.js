'use strict'

const mongoose = require ('mongoose')

mongoose.connection.on('error', err=>{
    console.log('Error de conexión', err)
    //Si ocurre, tiro mi aplicación con code =1
    //La tiro porque esta aplicación no sirve
    //para nada si no ha conectado a la bbdd
    process.exit(1)
})

//La primera vez que ocurra el evento open 
//(es decir, que se conecte), quiero que ocurra
// la arrow
//Se podría poner on en lugar de once
mongoose.connection.once('open', ()=>{
    console.log('Conectado a MongoDB en',mongoose.connection.name)
    //console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')
})


mongoose.connect('mongodb://localhost/database', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

module.exports =mongoose.connection