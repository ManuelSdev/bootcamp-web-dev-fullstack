var express = require('express');
var router = express.Router();
const Anuncio = require('../models/Anuncio') 

/* GET home page. */
router.get('/', async(req, res, next) => {
 
  const nombre=req.query.nombre
  const anuncios = await Anuncio.find({}).exec()
  //res.locals.anuncios=anuncios[0].tags
  res.locals.anuncios=anuncios
  console.log(anuncios[0].tags)
  //prueba = JSON.parse(`${anuncios}`)
 prueba = 'kkkkk'
 res.locals.prueba=prueba

 res.render('index', { title: 'NODEPOP' });
 console.log('aaaa')
  //res.send(anuncios)
});
/*
async function hola(){
  try {
    const a=  Anuncio.find({}).exec()
  console.log(a)
  } catch (error) {
    console.log('Error al iniciar base de datos', error)
  }
  
}

 hola()
 */
module.exports = router;
