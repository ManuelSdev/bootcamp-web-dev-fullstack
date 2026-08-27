var express = require('express');
var router = express.Router();

const Anuncio = require('../../models/Anuncio')

//MÉTODO PARA OBETENER VISTA ANUNCIOS
/* GET /apiv1/anuncios */
router.get('/', async(req, res, next) => {
  try {
    const nombre=req.query.nombre
    const venta= req.query.venta
    const precio=req.query.precio
    const tag=req.query.tag
    const limit = parseInt(req.query.limit)
    const sort = req.query.sort
    const skip= parseInt(req.query.skip)
    //const foto= req.query.foto

    //const anuncios = await Anuncio.find({nombre:nombre})

    const anuncios = await Anuncio.lista(nombre, venta, precio, tag, limit, sort, skip)
    res.json({result: anuncios })
  } catch (error) {
    next(error)
  }

});

//MÉTODO PARA AÑADIR ANUNCIOS
router.post('/', async (req, res, error)=>{
  try {
      //pongo lo que voy a recibir: la info del agente para crear un agente
      const datosAnuncio = req.body //pillamos el body entero
      //Creamos agente en memoría
      const anuncio= new Anuncio(datosAnuncio)
      //Ahora lo guardamos en bbdd haciendo await agente.save()
      //y tb lo guardamos en una variable
      const nuevoAnuncio = await anuncio.save()
      await agente.multar()//********************************************* */

      res.status(201).json({result: nuevoAnuncio})
  } catch (error) {
      next(error)
  
  }
})


module.exports = router;
