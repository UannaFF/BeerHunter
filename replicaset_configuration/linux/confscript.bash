#!/bin/bash
echo "Erasing previous replica set settings:" &
xterm -hold -e "$HOME/Documents/Distributed/BeerHunter/replicaset_configuration/erase-replicaset.bash" &
echo "Setting up first replica set node in port 27017:" &
xterm -hold -e "mongod --replSet beerhunterreplica --port 27017 --bind_ip localhost --dbpath $HOME/Documents/Distributed/BeerHunter/srv/mongodb/beerhunterreplica-0 --smallfiles --oplogSize 128" &
echo "Setting up second replica set node in port 27018:" &
xterm -hold -e "mongod --replSet beerhunterreplica --port 27018 --bind_ip localhost --dbpath $HOME/Documents/Distributed/BeerHunter/srv/mongodb/beerhunterreplica-1 --smallfiles --oplogSize 128"&
echo "Setting up third replica set node in port 27019:" &
xterm -hold -e "mongod --replSet beerhunterreplica --port 27019 --bind_ip localhost --dbpath $HOME/Documents/Distributed/BeerHunter/srv/mongodb/beerhunterreplica-2 --smallfiles --oplogSize 128"&

#xterm -hold -e "mongo --host localhost/beerhunterDS:27017 $HOME/Documents/Distributed/BeerHunter/db-script.js"