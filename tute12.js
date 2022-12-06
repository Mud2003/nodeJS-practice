var express = require('express');
var app=express();
var mysql=require('mysql');
var handlebars=require('express-handlebars');
var bodyparser=require('body-parser');
app.use(bodyparser());
var con;

app.engine('handlebars',handlebars.engine({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.get('/',function(req,res){
	
	con.query("SELECT * FROM studentdb",function(err,result){
		if(err) throw err;
		console.log(result);
		res.render('student',{
			result:result
		});
	});

});

app.get('/deleteuser/:studentindex',function(req,res){
	var ino=req.params.studentindex;
	
	con.query("DELETE FROM student WHERE indexNo="+ino+";",function(err,result){
		if(err) throw err;
		console.log(err);
		res.render('student',{
			result:result
		});
	});

});

app.listen(8080,function(){
	con=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'student'
});
	console.log("listning to port 8080");
});