'use strict';

console.log('empiezo')


/*Esta estructura saca empiezo+ termino y 2 segundo despues texto1 y texto2 a la vez
//función que escribe un texto en la consola tras 2 segundos

function escribeTras2Segundos(texto){
    setTimeout(()=> {
        console.log(texto)
    }, 2000)
}
escribeTras2Segundos('texto1')
escribeTras2Segundos('texto2')
console.log('termino')
*/

//Esta otra usa callbacks para sacar empiezo...a los 2 seg texto1... a los 2 seg texto2
//función que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callback){
    setTimeout(()=> {
        console.log(texto)
        callback()
    }, 2000)
}

function serie (arr, fn, callback){
    if(arr.length==0){
        callback()//justo antes de salir y terminar, llama a este callback
        return
    }
    
    //fn es escribeTras2Segundos
    //Meth shift de array extrae y devuelve el primer elemento del array
    fn('texto' + arr.shift(), function(){
        serie(arr, fn, callback)
    })
}

serie([1,2,3,4,5], escribeTras2Segundos, ()=>{
    console.log('termino')
})