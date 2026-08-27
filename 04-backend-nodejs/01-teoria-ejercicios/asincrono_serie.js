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

function serie (n, fn, callback){
    if(n==0){
        callback()//justo antes de salir y terminar, llama a este callback
        return
    }
    n=n-1
    //fn es escribeTras2Segundos
    fn('texto'+n, function(){
        serie(n, fn, callback)
    })
}

serie(5, escribeTras2Segundos, ()=>{
    console.log('termino')
})