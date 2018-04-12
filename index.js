// Cargar el modulo HTTP
var http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var router = express.Router();
var controller = require('./controller.js');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var path = __dirname + '/views/'; //path to views

/*
 * Section defining router paths and actions fo 
 */

//Router function, every request is gonna pass through here
router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});
 
router.get("/",function(req,res){
  res.render('index');
});

router.get("/index",function(req,res){
  res.render('index');
});

router.get("/add-form",function(req,res){
  res.render("add-form");
});

router.post("/add-form-save", function(req, res) {
  if(req.body.name && req.body.calories && req.body.type && req.body.origincountry) {
    req.body.insert = true;
    console.log('params: '+req.body.name);
    console.log('params: '+req.body.calories);
    console.log('params: '+req.body.type);
    console.log('params: '+req.body.origincountry);
    if(!req.body.img) req.body.img = 'img/noimage.png';
    res.redirect("detail?name="+encodeURIComponent(req.body.name)+
      '&calories='+encodeURIComponent(req.body.calories)+
      '&type='+encodeURIComponent(req.body.type)+
      '&origincountry='+encodeURIComponent(req.body.origincountry)+
      '&img='+encodeURIComponent(req.body.img)+
      '&insert='+encodeURIComponent(true));
  } else res.redirect("detail");

  
});

router.get("/detail",function(req,res){
  //console.log('after adding: '+req.query.type);
  //console.log('insert: '+req.query.insert);
  if(req.query.insert == 'true') {
    console.log('inserting beer');
    var beer = {'name':req.query.name, 'calories':req.query.calories, 
    'type':req.query.type, 'origincountry':req.query.origincountry, 'image':req.query.img};
    controller.insertBeer(beer, function(err) {
        if(err) res.render('404');
        else res.render('detail', {name:req.query.name, calories:req.query.calories, 
      type:req.query.type, origincountry:req.query.origincountry, image:req.query.img});
    });
  } else {
    controller.findBeerBy({'name':req.query.name},function(err, docs) {
        if (!err) {
            console.log('showing beers');
            //console.log("docs results: "+docs);
            var intCount = docs.length;
            if(intCount > 0) {
              res.render('detail', {name:docs[0].name, calories:docs[0].calories, 
      type:docs[0].type, origincountry:docs[0].origincountry, image:docs[0].image});
            } else res.render('404');
        } else {
            console.log("docs with no results");
            res.render('404');
        }
    });
    
  }
});

router.post('/search', function(req, res, next) {

    var keyword = req.body.search;
    //console.log("keyword of search: "+keyword);
    var string = encodeURIComponent(keyword); //make sure it's the right format
    res.redirect('/category-full?keyword=' + string); //redirect to get results list

});

router.get('/beers', function(req, res, next) {
    //console.log("Beers directioning");
    controller.findBeerBy({},function(err, docs) {
        if (!err) {
            //console.log("docs results: "+docs);
            var intCount = docs.length;
            if(intCount > 0) console.log("IMAGE 0: "+docs[0].image);
            res.render('category-full', {searchKeyword: "Beers", results : docs});
        } else {
            //console.log("docs with no results");
            res.render('404');
        }
    });
});

router.get("/category-full",function(req,res){
  var params = {};
  var keyword;
  if(req.query.keyword) {
    params = {'name':{$regex:".*"+ req.query.keyword +".*", $options:"i"}};
    keyword = req.query.keyword;
  } else if(req.query.type) {
    //console.log('Searching by type');
    params = {'type':{$regex:".*"+ req.query.type+".*", $options:"i"}};
    keyword = req.query.type;
  }

  //var keyword = req.query.keyword; //get search field
    controller.findBeerBy(params, function(err, docs) {
          if (!err) {
              //console.log("docs results: "+docs);
              var intCount = docs.length;
              res.render('category-full', {searchKeyword: keyword, results : docs});
          } else {
              //console.log("docs with no results");
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

