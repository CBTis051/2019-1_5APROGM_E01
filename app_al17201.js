var http = require ('http');
http.createServer(function(req, res) {
    res.writeHead(200,{'Content-Type': 'application/json; charset=utf-8'});

    res.end('Hola Mundo Node JS Repo GIT - Grande Alemán Genny Rubsan\n');
}).listen(8081);
console.log('Server runnig on port 8081')