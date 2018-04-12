//File for the controller part: connections to the database

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var mongodb;

//Connection to the database
//MongoClient.connect('mongodb://localhost:27018/DS', function (err, db) {
MongoClient.connect('mongodb://localhost:27017/beerhunterDS?replicaSet=beerhunterreplica', function (err, db) {
	    if (err) {
	        throw err;
	    } else {
	        console.log("successfully connected to the instance 27017 of the beerhunterreplica set");
	    }
	    mongodb = db;
});

module.exports = {

	/*
	 *	Query to find bars that match the params in the params dict e.g. 
	 *	{available : [venezuela, france], fabricated : belgium}
	 */
	findBarBy : function(params, callback) {
		mongodb.db('beerhunterDS').collection('bars', function(err, collection) {
	        if (!err) {
	          collection.find(params).toArray(callback); //end collection.find 
	        } else {
	        	console.log("error getting all bars");
	          onErr(err, callback);
	        }
	    }); //end db.collection
	},

	/*
	 * Look for a beer which name matches the query string
	 */
	findBeer : function(query, callback) {
		mongodb.db('beerhunterDS').collection('beers', function(err, collection) {
	        if (!err) {
	          collection.find({
	            'name': {$regex:".*"+ query +".*", $options:"i"}
	          }).toArray(callback); //end collection.find 
	        } else {
	        	console.log("Errors getting beer "+query);
	          onErr(err, callback);
	        }
	    }); //end db.collection
	},

	/*
	 *	Query to find beers that match the params in the params dict e.g. 
	 *	{available : [venezuela, france], fabricated : belgium}
	 */
	findBeerBy : function(params, callback) {
		mongodb.db('beerhunterDS').collection('beers', function(err, collection) {
	        if (!err) {
	          collection.find(params).toArray(callback); //end collection.find 
	        } else {
	        	console.log("Errors getting all beers");
	          onErr(err, callback);
	        }
	    }); //end db.collection
	},

	insertBeer : function(beerparams, callback) {
		mongodb.db('beerhunterDS').collection("beers", function(err, col) {
            col.insert(beerparams, callback);
         });
	},

	cleanup : function() {
		if(mongodb) 
			mongodb.close();
	}

};