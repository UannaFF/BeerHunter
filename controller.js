//File for the controller part: connections to the database

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var mongodb;

//Connection to the database
MongoClient.connect('mongodb://localhost:27018/DS', function (err, db) {

	//MongoClient.connect('mongodb://192.168.1.83:27017/DS?replicaSet=rs0', function (err, db) {
	    if (err) {
	        throw err;
	    } else {
	        console.log("successfully connected to the database");
	    }
	    mongodb = db;
	    //db.close();
	});

module.exports = {

	getAllBars : function(callback) {
		mongodb.db('DS').collection('bars', function(err, collection) {
	        if (!err) {
	          collection.find().toArray(callback); //end collection.find 
	        } else {
	        	console.log("error getting all bars");
	          onErr(err, callback);
	        }
	    }); //end db.collection
	},

	getAllBeers : function(callback) {
		mongodb.db('DS').collection('beers', function(err, collection) {
	        if (!err) {
	          collection.find().toArray(callback); //end collection.find 
	        } else {
	        	console.log("Errors getting all beers");
	          onErr(err, callback);
	        }
	    }); //end db.collection
	},

	findBeer : function(query, callback) {
		mongodb.db('DS').collection('beers', function(err, collection) {
	        if (!err) {
	          collection.find({
	            'name': query
	          }).toArray(callback); //end collection.find 
	        } else {
	        	console.log("Errors getting beer "+query);
	          onErr(err, callback);
	        }
	    }); //end db.collection
	},

	cleanup : function() {
		mongodb.close();
	}

};