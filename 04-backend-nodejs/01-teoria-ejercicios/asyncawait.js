'strict mode'


//función que devuelve promesa
function sleep(ms){
    return new Promise( (resolve, reject) => {
        setTimeout( () =>{
            if(true){ //true salta el reject, false no salta
                reject(new Error('error del reject'))

            }
            resolve(67)

        }, ms)
    })
}

//consumir la promesa (hacer cosas despues de que se haga la promesa)

/*
async function main(){ //async convierte a la función main en una promesa
    const promesa =sleep(2000) 
    console.log(promesa)
    const resultado = await promesa 
    console.log(resultado)
}

//main devuelve una promesa por estar definida con async
//Si el if del reject es false, funciona el main() solo
//Si es true, salta el reject con el error y sale el warning por no tener chequeado el error
//Para cazar errores le metemos catch

main().catch(err =>{
    console.log(err)
})
*/

//AHORA USANDO TRY CATCH

async function main(){ 
    const promesa =sleep(2000) 
    console.log(promesa)
    try {//la parte que vamos a controlar, por si falla, dentro del try
        const resultado = await promesa 
        console.log(resultado)
        //Si pongo esto (código síncrono y dará error porque zzzz no es un json)
        //con el reject en false, tb tirará del catch aun siendo síncrono
        //JSON.parse('zzz') 
        //Ahora bucle asíncrono facil con await
        for (let i =0; i<5; i++){
            await sleep(1000)
            console.log('he esperado un segundo')
        }
    } catch{ //aquí por si falla
        //Como esté catch pillará el error antes, el error no se propaga y sale este 
        //mensaje y no el del catch del main porque ese catch ya no pilla el error
        console.log('gestión del error del try catch')
    }
}
//Este catch pillará errores producidos fuera del try
//por ejemplo si el const promesa = sleep tira un reject
main().catch(err =>{
    console.log(err)
})
