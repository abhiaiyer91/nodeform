var http = require('http'),
url = require('url'),  
fs = require('fs');
  
http.createServer(function (req, res) {
// parse URL
var url_parts = url.parse(req.url);
console.log(url_parts+" query "+url_parts.query);
  
if(url_parts.pathname != '/') {
      // file serving
      fs.readFile('.'+url_parts.pathname,
function(err, data) {
         if(err) {res.end("<h1 align='center'>I am sorry. File Not Found.</h1>");}
         res.end(data);
      });
}
else {
          res.end("Hi,Server is running.This is Hello World.Thanks");
}
}).listen(8080, 'localhost');

console.log('Server running at localhost:8080');