// Cargar el modulo HTTP
var http = require('http');

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://localhost:27017/DS', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});
 
// Configurar una respuesta HTTP para todas las peticiones
function onRequest(request, response) {

  console.log("Request received");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello world");
  response.end();
}
 
var server = http.createServer(onRequest);
 
// Escuchar al puerto 8080
server.listen(8080);
 
// Poner un mensaje en la consola
console.log("Server starsted in http://localhost:8080/");
