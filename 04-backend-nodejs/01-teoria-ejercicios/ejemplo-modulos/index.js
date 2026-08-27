
'use strict'

const hola = require('./modulo')
//esto ejecuta directamente el código que haya en el módulo cargado
const modulo= require ('./modulo')

//Si tenemos algún export en el módulo, podemos usarlo
console.log(modulo.suma(3,4))
console.log(modulo.suma2(1,1))
