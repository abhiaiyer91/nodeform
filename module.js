var http = require('http'),
    util = require('util');
 
var server = http.createServer(function (req,res){
    util.log('Hello world');
    res.end('Hello world');
});
 
server.listen(8080);
util.log('Server listening at localhost:8080');