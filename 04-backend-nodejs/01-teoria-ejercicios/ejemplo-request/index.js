'use strict'

const axios = require('axios')

//Llamo a mi función principal y pongo un catch por si falla

//Le digo que si recibo un error, llame a conlog
main().catch(err=>console.log(err))

//main devuelve una promesa
async function main(){
    //Voy a llamar a mi propio API
    //Podría llamar al API de Facebook, al de Google, etc
    //Mi api es http://localhost:3000/api/agentes

    const url = 'http://localhost:3000/api/agentes'
    //axios hará una petición get a mi api con la url
    const response = await axios.get(url)
    //filtro la parte data de la respuesta
    console.log(response.data)
}