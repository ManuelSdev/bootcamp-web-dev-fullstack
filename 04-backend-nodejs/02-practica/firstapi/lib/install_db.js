'use strict'

//Importo modelo
const Anuncio = require('../models/Anuncio') 
 require('./connectMongoose')
const fakeData =require('./anuncios')
/*
const prueba = new Anuncio({
    "nombre": "+++++",
    "venta": true,
    "precio": 50,
    "foto": "bici.jpg",
    "tags": ["aaa", "ddd"]
})
*/


async function startDatabase(){
    try {
        //const encontrados = await Anuncio.find({}).exec()
        //console.log(encontrados)
        await Anuncio.deleteMany({})
        await Anuncio.insertMany(fakeData.anuncios)
       // await prueba.save()
        const encontrados = await Anuncio.find({})
       // res.json()
       //console.log("Anuncios encontrados",encontrados)
      
    } catch (error) {
        console.log('Error al iniciar base de datos', error)
    }
     
    //console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')
}

startDatabase()