// Create web server
// 1. load http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// 2. create a server
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var ext = path.extname(pathname);
    var mimeType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.gif': 'image/gif',
        '.jpg': 'image/jpeg'
    };

    if (pathname === '/') {
        pathname = '/index.html';
    }

    fs.readFile(__dirname + pathname, function (err, data) {
        if (err) {
            response.writeHead(500, {'Content-Type': 'text/plain'});
            response.end('500 - Internal Error');
        } else {
            response.writeHead(200, {'Content-Type': mimeType[ext] || 'text/plain'});
            response.end(data);
        }
    });
}).listen(3000, function () {
    console.log('Server running at http://
