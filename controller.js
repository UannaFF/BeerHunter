//File for the controller part: connections to the database

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var mongodb;
var rsconf = {
  _id: "rs0",
  members: [
    {
     _id: 0,
     host: "localhost:27017"
    },
    {
     _id: 1,
     host: "localhost:27018"
    },
    {
     _id: 2,
     host: "localhost:27019"
    }
   ]
}

/*MongoClient.connect('mongodb://localhost:27018/DS', function (err, db) {
}*/

//Connection to the database
//MongoClient.connect('mongodb://localhost:27018/DS', function (err, db) {
/*MongoClient.connect('mongodb://localhost:27017/DS?replicaSet=rs0', function (err, db) {
	    if (err) {
	    	console.log('before error');
	    	configureReplicaSet(db);
	        //throw err;

	    } else {
	        console.log("successfully connected to the database");
	    }
	    mongodb = db;
});*/


//Connection to the database
//MongoClient.connect('mongodb://localhost:27018/DS', function (err, db) {
MongoClient.connect('mongodb://localhost:27017/beerhunterDS?replicaSet=beerhunterreplica', function (err, db) {
	    if (err) {
	    	console.log('before error');
	    	configureReplicaSet(db);
	        //throw err;

	    } else {
	        console.log("successfully connected to the database");
	    }
	    mongodb = db;
});

module.exports = {

	getAllBars : function(callback) {
		mongodb.db('beerhunterDS').collection('bars', function(err, collection) {
	        if (!err) {
	          collection.find().toArray(callback); //end collection.find 
	        } else {
	        	console.log("error getting all bars");
	          onErr(err, callback);
	        }
	    }); //end db.collection
	},

	getAllBeers : function(callback) {
		mongodb.db('beerhunterDS').collection('beers', function(err, collection) {
	        if (!err) {
	          collection.find().toArray(callback); //end collection.find 
	        } else {
	        	console.log("Errors getting all beers");
	          onErr(err, callback);
	        }
	    }); //end db.collection
	},

	findBeer : function(query, callback) {
		mongodb.db('beerhunterDS').collection('beers', function(err, collection) {
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
		if(mongodb) 
			mongodb.close();
	}

};