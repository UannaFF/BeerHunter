BeerHunter project


	Web server created with nodejs connected to a mongodb replicaset.

Configuration of the replicaset:

	LINUX: run ./replicaset_configuration/linux/confscript.bash
	OSX: run ./replicaset_configuration/osx/confscript.bash

	After doing that, there'll be three terminals, each of them will be running an instance of the replica set.

	The default ports are 27017, 27018, 27019.

	The folders used to store the replica set databases are in the folders:
		1. srv/mongodb/beerhunterreplica-0
		2. srv/mongodb/beerhunterreplica-1
		3. srv/mongodb/beerhunterreplica-2