var http = require('http');
var fs = require('fs');

var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {

    if (req.url === '' || req.url === '/' || req.url === '/index.html') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(index);
    }
    else {
        res.writeHead(200, {'Content-Type': 'application/javascript;'});
        var script = fs.readFileSync('../EventBus.min.js');
        res.write(script);
    }
    res.end();
}).listen(3002);
console.log('running demo server on port 3002..');