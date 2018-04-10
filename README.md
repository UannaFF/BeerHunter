BeerHunter project


	Web server created with nodejs connected to a mongodb replicaset.

Configuration of the replicaset:

	LINUX: run ./replicaset_configuration/linux/confscript.bash
	OSX: run ./replicaset_configuration/osx/confscript.bash

	After doing that, there'll be three terminals, each of them will be running an instance of the replica set. The ports are 27017, 27018, 27019. The folders use to store the replica set instances are in the folders srv/mongodb/beerhunterreplica-0, srv/mongodb/beerhunterreplica-1, srv/mongodb/beerhunterreplica-2.