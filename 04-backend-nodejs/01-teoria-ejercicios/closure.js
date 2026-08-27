'use strict'

function creaSumador(valor){
    return function(algo){
        return algo+valor
    }
}

const suma5 =creaSumador(5)

console.log(suma5(10))
console.log(suma5(20))
console.log(suma5(30))
console.log(suma5(50))