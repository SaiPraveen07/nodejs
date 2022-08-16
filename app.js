var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
app.get('/',function(req,res){
    res.sendFile(__dirname + '/'+"index2.html");
});
app.post('/home',urlencodedParser,function(req,res){
    res.send('<h1>welcome'+req.body.username+'</h1><br><h2>Mail ID :'+ req.body.mailid+'</h2>');
});
app.listen(8082);
