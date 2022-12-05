var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyparser = require('body-parser');

app.use(bodyparser());

app.use('/mycssfiles',express.static(__dirname+'/css'));

app.get("/",function(request,response){
    response.sendFile('home.html',{root:__dirname});
    //    response.end("My name is "+JSON.stringify(request.query.name));
});

app.post("/user",function(request,response){
   
        response.end("My name is "+JSON.stringify(request.body.firstname)+" "+JSON.stringify(request.body.lastname));
});

app.get(/^(.+)/,function(request,response){
//	response.end(JSON.stringify(request.query));
    try{
        if(fs.statSync(path.join(__dirname,'views',request.params[0]+'.html'))){
			response.sendFile(request.params[0]+'.html',{root:path.join(__dirname,'views')});
		}
    }
    catch(error){
        response.sendFile('404.html',{root:path.join(__dirname,'views')});
    }
    
});

app.listen(8080, function() {
    console.log("Server is up")
});