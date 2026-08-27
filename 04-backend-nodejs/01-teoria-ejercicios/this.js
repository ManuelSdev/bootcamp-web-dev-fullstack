'use strict'

function Coche(ruedas){
    this.ruedas =ruedas
    this.cuantasRuedas = function(){
        //Busca a la izquierda de la INVOCACION al método (antes del punto) 
        //y lo que haya allí será el this
        console.log('tengo', this.ruedas, 'ruedas')
    }
}

const todoterreno = new Coche(4)

//todoterreno.cuantasRuedas()

//Aquí pierde el this de this.ruedas y da undefined
//...será porque pasa como parámetro sin el () al final del método
setTimeout(todoterreno.cuantasRuedas, 2000)

//Así, sin (), también lo pierde
const hola2 =todoterreno.cuantasRuedas
hola2()

function hola(){
    todoterreno.cuantasRuedas()
}
//Aquí no lo pierde
setTimeout(hola, 2000)

//USANDO BIND
//Aquí lo lleva pegado y ya no lo pierde
setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000)

//Aquí tb lo pegas
const hola3 =todoterreno.cuantasRuedas.bind(todoterreno)
hola3()
