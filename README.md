# BeerHunter project

Web server created with nodejs connected to a mongodb replicaset.

## Configuration of the replicaset:

Dependencies:
	
	nodejs
	express
	mongodb
	mongodb driver for nodejs

Configuration of the replicaset:

LINUX: from the top BeerHunter directory, run

	./replicaset_configuration/linux/confscript.bash
       
OSX: from the top BeerHunter directory, run

	./replicaset_configuration/osx/confscript.bash

	run mongo localhost:27019/beerhunterDS ./replicaset_configuration/db-script.js
	in a new terminal to configure the replicaset and add elements to the database

After doing that, there'll be three terminals, each of them will be running an instance of the replica set.

The default ports are 27017, 27018, 27019.

The folders used to store the replica set databases are in the folders:

1. beerhunterreplica/mongodb/beerhunterreplica-0
2. beerhunterreplica/mongodb/beerhunterreplica-1
3. beerhunterreplica/mongodb/beerhunterreplica-2

Then run:

	mongo localhost:27017/beerhunterDS ./replicaset_configuration/db-script.js

in a new terminal to configure the replicaset and add elements to the database

## Running the web server:

Again, from the top BeerHunter directory, run

	node index.js

Open a web browser and point it to

	localhost:3000
>>>>>>> 68c2a6aa1df183bfac1d460ef17901178b7601c0
