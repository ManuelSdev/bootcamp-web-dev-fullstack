'use strict'

//carga librería
const EventEmitter = require('events')

//crea emisor de eventos
//emisor es instancia de eventEmitter y este viene de importar events que es una librería de node
const emisor = new EventEmitter()

//ESTO ES UN MANEJADOR DE EVENTOS
//cuando llegue el evento (primer arg), ejecuta la función que viene despues

emisor.on('llamada de telefono', (quienLlama)=>{
    if(quienLlama === 'madre') return
    console.log('suena el teléfono')
    
})

//esto  otro  manejador de eventos... que solo salta una vez

emisor.once('llamada de telefono', ()=>{
    console.log('brr brr')
})
//ahora emito un evento
emisor.emit('llamada de telefono')
emisor.emit('llamada de telefono')

//EMIT TAMBIEN PUEDE RECIBIR UN PARAMETRO
emisor.emit('llamada de telefono', 'madre')

//ahora suscribimos el evento beforeExit a process.on
//para que ejecute la f callback antes de salir
//CLAVE: procces hereda de eventEmitter, por eso tiene un método on, que hereda de eventEmitter
//Podemos hacer que cualquier objeto herede de eventEmiter para que tengan funcionalidades sobre eventos
process.on('beforeExit', ()=>{
    console.log('me salgo')
})