var http = require ('http');
http.createServer(function(req, res) {
    res.writeHead(200,{'Content-Type': 'application/json; charset=utf-8'});

    var objeto = {
        mensaje : 'Hola mundo Node JS Repo GIT - Gamboa Villalobos Diana Karina\n'
    };

    var json = JSON.stringify(objeto);

}).listen(8081);
console.log('Server runnig on port 8081')