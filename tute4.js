var express = require('express');
var app = express();

app.get("/",function(request,response){
    response.send("Hello from express");
})
app.listen(8080, function() {
    console.log("Server is up")
})