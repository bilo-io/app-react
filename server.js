var express = require('express');
var path = require('path');
var server = express();
var serverDir = __dirname + '/dist/';
let port = process.env.port || 8080;

server.use(express.static(serverDir));
// React Router
server.get('/*', (req, res) => {
    res.sendFile(path.join(serverDir, 'index.html'))
})
server.listen(port, '0.0.0.0');

console.log('...listening on port: ' + port);