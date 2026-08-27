'strict mode'


//función que devuelve promesa
function sleep(ms){
    return new Promise( (resolve, reject) => {
        setTimeout( () =>{
            //el parámetro que metes a resolve pasa al meth then
            //resolve(67) //comento parea meter reject y ver que pasa cuando falla la promesa
            //->como no hay resolve, la primera promesa falla directamente
            //el paramámetro que pasas al new error se pasa al catch err
            reject(new Error('erro del reject'))
        }, ms)
    })
}

//consumir la promesa (hacer cosas despues de que se haga la promesa)
const promesa =sleep(2000) //

console.log(promesa)
/*
promesa.then((resultado)=>{
    console.log('la promesa se ha resuelto con resultado:' , resultado)
})
*/
//encadenar promesas

promesa.then((resultado)=>{
    console.log('la promesa se ha resuelto con resultado:' , resultado)
    return sleep(2000)
}).then(()=>{
    console.log('Pasaron otros 2 segundos')
}).then(()=>{
    console.log('Pasaron otros 2 segundos')
}).catch(err=>{
    console.log('Pasaron otros 2 segundos', err)
})


