// Cargar el modulo HTTP
var http = require('http');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
var dbs = require('./javascripts/db');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
//MongoClient.connect('mongodb://localhost:27017/DS', function (err, db) {
    MongoClient.connect('mongodb://192.168.1.83:27017/DS?replicaSet=rs0', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});
 
app.post('/', function (req, res) {
    //let beer = req.type;

  console.log(req.body.city);
  res.render('index');  
})

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
 
// Poner un mensaje en la consola
console.log("Server starsted in http://localhost:8080/");
