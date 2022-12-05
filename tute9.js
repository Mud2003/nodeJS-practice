var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var sessions = require('express-session');
var session;

app.use(bodyparser());
app.use(sessions({
    secret:'gsdgiegdabdjuyga'
}));

app.get('/',function(req,res){
    session = req.session;
    if(session.userid){
        res.send("Welcome Admin <a href=\'/logout'>Click to logout</a>");
    }
    else
	res.sendFile('login.html',{root:__dirname});
});

app.get('/logout',function(req,res){
    req.session.destroy();
    res.redirect('/');
});
app.post('/login', function(req,res){
    if(req.body.username=='admin' && req.body.password=='admin'){
        session = req.session;
        session.userid = req.body.username;
        res.send("Welcome Admin <a href=\'/logout'>Click to logout</a>");
    }
    else{
        res.end("Invalid Username or Password")
    }
})

app.listen(8080,function(){
    console.log('woowww');
});