# BeerHunter project

Web server created with nodejs connected to a mongodb replicaset.

## Dependencies

- Linux
- MongoDB (Community Edition is fine)
- Node.js

## Commands for MongoDB Replica Set

### Initial configuration of the replicaset:

From the top BeerHunter directory, run

	./replicaset_configuration/linux/confscript.bash

After doing that, there'll be three terminals, each of them will be running a mongod instance of the replica set. Verify that the following line appears in the output:

	[initandlisten] waiting for connections on port <portnumber>

The default ports are 27017, 27018, 27019.

Then, in a new terminal, run:

	mongo localhost:27017/beerhunterDS ./replicaset_configuration/db-conf.js

to configure the replicaset. Wait for the three mongod instances to connect to each other and establish themselves as PRIMARY or SECONDARY.

If you'd like to pre-populate the database with some data, wait for the primary to be established and run:

	mongo localhost:27017/beerhunterDS ./replicaset_configuration/db-data.js

### Starting the replicaset after it has been configured:

After the replicaset has been configured and populated, simply run 

	./replicaset_configuration/linux/confscript.bash
	
This time, you should see output indicating that the three terminals have connected to each other.

### Resetting the replicaset:

From the top BeerHunter directory, run

	./replicaset_configuration/erase-replicaset.bash

## Running the web server:

Again, from the top BeerHunter directory, run

	node index.js

If you see

	MongoError: no primary found in replicaset or invalid replica set name
	
try once again after waiting a few seconds. 
If the server successfully started, you should see

	successully connected to the instance 27017 of the beerhunterreplica set 

Open a web browser and point it to

	localhost:3000

## Other information
The folders used to store the replica set databases are in the folders:

1. beerhunterreplica/mongodb/beerhunterreplica-0
2. beerhunterreplica/mongodb/beerhunterreplica-1
3. beerhunterreplica/mongodb/beerhunterreplica-2
