'use strict';

//Crea función para usarla como constructor de objetos
function Fruta (){
    console.log(this) //Como abajo tienes un new Fruta, el this por si mismo ya se refiere al objeto
    this.nombre ='Limón'

    this.saluda=() => {
        console.log('Hola, soy', this.nombre)
    }
}



//Crear un objeto con ese constructor
const limon = new Fruta();

console.log(limon)

limon.saluda();