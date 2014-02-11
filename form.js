
var http = require('http'),
    util = require('util'),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring');

var server = http.createServer(function (req,res){
                            
    var url_parts = url.parse(req.url,true);
    //console.log(url_parts);
    
    var body = '';
    if(req.method === 'POST'){
       // res.end('post');
       console.log('Request found with POST method');     
        req.on('data', function (data) {
            body += data;
            console.log('got data:'+data);
        });


        req.on('end', function () {

            var POST = qs.parse(body);
    
            res.write("<h1>---</h1>", 'utf8');    
            res.write("<h1>title: "+POST.title+"</h1>", 'utf8');
            res.write("<h1>layout: "+POST.layout+"</h1>", 'utf8');
            res.write("<h1>image: "+POST.image+"</h1>", 'utf8');
            res.write("<h1>summary: "+POST.summary+"</h1>", 'utf8');
            res.write("<h1> content: "+POST.content+"</h1>", 'utf8');
            res.write("<h1>---</h1>", 'utf8');   
            res.end();


        });
        
       
    } else {
    console.log('Request found with GET method');     
    req.on('data',function(data){ res.end(' data event: '+data);});
    if(url_parts.pathname == '/')
        
    fs.readFile('./form.html',function(error,data){ 
    console.log('Serving the page form.html');
    res.end(data);    
    });

    else if(url_parts.pathname == '/getData.md'){
         console.log('Serving the Got Data.');
        getData(res,url_parts);
    }
        }

});
server.listen(8080);
console.log('Server listenning at localhost:8080');



function  getData(res,url_parts){
 console.log("Data submitted by the user name:"+url_parts.query.name+" and age:"+url_parts.query.age);
        res.end("Data submitted by the user name:"+url_parts.query.name+" and age:"+url_parts.query.age);
}