var mod = require('./module');
var http = require('http');

http.createServer(function(req,res){
    res.end("Hello World");   
}).listen(8080);
console.log("nodejs server is listning")

mod.func1();
mod.func2();