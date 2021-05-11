const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server', // we are specifing the redis-server container name here in order to create a connection between containers in docker-compose
  //if it was a traditinal node.js application we would have specified the URL of the server like 'https://my-redis-server.com'
  
  port: 6379 // we can also specify the port number on redis-server is running and 6379 is the default port of redis-server
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.get('/noRestart', (req, res) => {
  process.exit(0);
  // exit code 0 means everything is fine but we stopped the container.
  client.get('visits', (err, visits) => {
    res.send('Number of visits ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.get('/failure', (req, res) => {
  process.exit(13);
  // exit code other than 0 means something went wrong that's why we stopped.
  client.get('visits', (err, visits) => {
    res.send('Number of visits ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('listening on port 8081');
});
