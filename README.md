# node-docker-compose-visit-timer
**This is a simple web app created using node.js and docker-compose to display the number of visitors on the webpage.**


This is a demo app built with an intention to successfully deploy a node.js app on redis-server using docker-compose container and then mapped node-app container's port 8081 to 8081 port of the host machine in order to interact with the world.

The root app contains a docker-compose.yml file which builds individual services (redis-server and node-app) and further makes them available to be consumed.

**URLs supported:**
1. localhost:8081/
2. localhost:8081/noRestart - node-app container is going to stop with exit code 0 and that can be seen on console window
3. localhost:8081/failure - node-app container is going to stop with exit code 13 and will restart again, can be seen on console window


**Fetures which I have implemented in this project:**
1. Networking with Docker-Compose
2. Container Maintenance with compose
3. Automatic Container restart in case of failure


**Dockerfile**: There is only one Dockerfile in the root directory which download the node.js dependencies and create a container out of it with sets the default command as "npm start".


**Information**: The node app is mapped at 8081 and can be accessed from localhost:8081 once the containers are up and running. 

**How to use**
1. Clone the project
2. Run docker-compose up
3. Access localhost:8081 from your browser
4. Other supported URLs mentioned above can also be used.

**NOTE: Feel free to go through the notes.txt file in root repositories to know more about exit codes and docker-compose restart policies.**
