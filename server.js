const http = require('http');
const config = require('./config/config');
const app = require('./index');
const hostname = config.host;
const port = config.port;

const server = http.createServer(app);

server.listen(port, hostname, (req, res) => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});