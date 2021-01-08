//Lauching node server
const http = require('http');

const routes = require('./route')

const server = http.createServer(routes);

server.listen(3000);
