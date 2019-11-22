var http = require('http');
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    var objeto = {
        mensaje : 'Hola Mundo Node JS Repo GIT - Carrillo Cuevas Jorge Luis\n'
    };

    var json = JSON.stringify(objeto);

    res.end(json);
    
}).listen(8081);
console.log('Server running on port 8081');