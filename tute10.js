var express = require('express');
var app = express();
var mysql = require('mysql');

app.get('/',function(req,res){

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'student'
    });
    
    con.query("SELECT * FROM student",function(err,result){
        if(err) throw err;
        console.log(result);
    })
});


app.listen(8080,function(){
    console.log("listning to port 8080")
})