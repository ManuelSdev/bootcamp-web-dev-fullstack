console.log('soy un modulo')

//exportar cosas
//module.export es un objeto vacío...lo pisamos con los objetos que queramos

const hola= {
    suma: (a,b)=> a+b
}
module.exports=hola


//otra forma ejem rompe alias
exports.suma2= (a,b)=> a+b

console.log(hola.suma(8,2))