var AWS = require('aws-sdk');
AWS.config.loadFromPath('./credentials.json');
var express = require('express');
app = express();
var port = 8080;

app.post('/receive',function(req,res){
	console.log('Received',req.body);
	res.end('test');
});

app.listen(port);
console.log('SNS Endpoint is listenning',port,'port');
