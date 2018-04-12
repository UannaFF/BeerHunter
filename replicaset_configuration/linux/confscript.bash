#!/bin/bash
if [ ! -d "./beerhunterreplica" ]; then
    echo "Creating directory for replica set" &
    mkdir beerhunterreplica
fi
cd beerhunterreplica
if [ ! -d "./mongodb" ]; then
    mkdir mongodb
fi
cd mongodb
for i in 0 1 2 3
do
    if [ ! -d "./beerhunterreplica-$i" ]; then
        echo "Creating directory for replica $i" &
        mkdir beerhunterreplica-$i
    fi
done
cd ../..

echo "Setting up first replica set node in port 27017:" &
xterm -hold -e "mongod --replSet beerhunterreplica --port 27017 --bind_ip localhost --dbpath ./beerhunterreplica/mongodb/beerhunterreplica-0 --smallfiles --oplogSize 128" &
echo "Setting up second replica set node in port 27018:" &
xterm -hold -e "mongod --replSet beerhunterreplica --port 27018 --bind_ip localhost --dbpath ./beerhunterreplica/mongodb/beerhunterreplica-1 --smallfiles --oplogSize 128" &
echo "Setting up third replica set node in port 27019:" &
xterm -hold -e "mongod --replSet beerhunterreplica --port 27019 --bind_ip localhost --dbpath ./beerhunterreplica/mongodb/beerhunterreplica-2 --smallfiles --oplogSize 128" &
echo "Setting up fourth replica set node in port 27020:" &
xterm -hold -e "mongod --replSet beerhunterreplica --port 27020 --bind_ip localhost --dbpath ./beerhunterreplica/mongodb/beerhunterreplica-3 --smallfiles --oplogSize 128" &
