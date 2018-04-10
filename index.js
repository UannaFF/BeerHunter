// Cargar el modulo HTTP
var http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var router = express.Router();
var controller = require('./controller.js');
//var dbs = require('./javascripts/db');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//app.use(express.bodyParser());

var path = __dirname + '/views/'; //path to views

//Router function, every request is gonna pass through here
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});
 
router.get("/",function(req,res){
  //res.sendFile(path + "index.ejs");
  res.render('index');
});

router.get("/index",function(req,res){
  //res.sendFile(path + "index.ejs");
  res.render('index');
});


router.post('/search', function(req, res, next) {

    var keyword = req.body.search;
    console.log("keyword of search: "+keyword);
    var string = encodeURIComponent(keyword); //make sure it's the right format
    res.redirect('/category-full?keyword=' + string); //redirect to get results list

});

router.get('/beers', function(req, res, next) {
    console.log("Beers directioning");
    controller.getAllBeers(function(err, docs) {
        if (!err) {
            console.log("docs results: "+docs);
            var intCount = docs.length;
            res.render('category-full', {searchKeyword: "Beers", results : docs});
        } else {
            console.log("docs with no results");
            res.render('404');
        }
    });
});

router.get("/category-full",function(req,res){
  var keyword = req.query.keyword; //get search field
  controller.findBeer(keyword, function(err, docs) {
        if (!err) {
            console.log("docs results: "+docs);
            var intCount = docs.length;
            res.render('category-full', {searchKeyword: keyword, results : docs});
        } else {
            console.log("docs with no results");
            res.render('404');
        }
    });
});

app.use("/",router);

app.use("*",function(req,res){
  res.render('404');
});

app.listen(3000, function () {
  console.log('Beerhunter europe 3000!')
});

process.stdin.resume();//so the program will not close instantly
 
 //Exit handler to cleanup database before exiting
function exitHandler(options, err) {
    console.log('About to exit with code');
    controller.cleanup();
    if (options.cleanup) console.log('clean');
    if (err) console.log(err.stack);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

// Poner un mensaje en la consola
console.log("Beer hunter server started in http://localhost:8080/");

