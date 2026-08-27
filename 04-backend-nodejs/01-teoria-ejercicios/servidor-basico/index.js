//Cargar librería http
const http= require('http')
//Cargar librería chance
const Chance=require('chance')

const chance= new Chance()


//Definir un servidor (usa meth createServer de librería require)

const server = http.createServer(function(request, response) {
    //response.writeHead(200, { 'Content-type': 'text/plain'});  
    response.writeHead(200, { 'Content-type': 'text/html'});  //ahora pilla el formato html
    //Creamos un nombre aleatorio con chance y lo colamos
    response.end(`Wake up, <b>${chance.name()}</b>`);

})


//Arrancar el servidor
server.listen(1337, '127.0.0.1')

console.log('Servidor arrancado en http://127.0.0.1:1337')