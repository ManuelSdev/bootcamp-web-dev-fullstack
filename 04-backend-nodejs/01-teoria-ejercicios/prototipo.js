'use strict'

function Persona(nombre){
    this.nombre=nombre/*
    this.saluda=function(){
        console.log('SOy', this.nombre)
    }
    */
}

const pablo = new Persona('Pablo')

Persona.prototype.saluda= function(){
    console.log('Soy', this.nombre)
}

pablo.saluda()

//Herencia de persona

function Agente(nombre){
    //Heredar el constructor de Persona
    //llamar a Persona con mi this
    Persona.call(this, nombre)
}

//Heredar propiedades y meths
//El prototipo de los Agentes sea una persona....
//hacemos que Persona sea el prototipo de Agente...para que este tenga sus propiedades
Agente.prototype =Object.create(Persona.prototype)
Agente.prototype.constructor = Agente

const smith = new Agente('Smith')

smith.saluda()

//Herencia múltiple----------------------------------------------------
function Superheroe(){
    this.vuela = function(){
        console.log(this.nombre,'vuela')
    }
}

//copiamos todas las propiedades de Superheroe al prototipo de Agente
//Se podría incluso heredar de una clase principal con extend y despues heredar copiando propiedades de otros constructores
Object.assign(Agente.prototype, new Superheroe())
smith.vuela()