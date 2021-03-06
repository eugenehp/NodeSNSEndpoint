var AWS = require('aws-sdk');
var SNSClient = require('aws-snsclient');
var express = require('express');
var config = require('./config.json');
AWS.config.loadFromPath('./credentials.json');

app = express();

var auth = {
    region: 'eu-west-1'
  , account: '251797077264'
  , topic: 'celebvm-video-iphone-uploads'
}
var client = SNSClient(auth, function(err, message) {
    console.log(message);
});

var test = function(req,res){
	console.log('test');
	console.log(req.body);
	res.end('.');
};

app.post('/receive', test);
app.get('*',test);
app.post('*',test);
app.get('/*',test);
app.post('/*',test);

/*
https://54.228.210.47/notification/url
*/
app.post('/notification/url', function(req, res) {
    var bodyarr = []
    req.on('data', function(chunk){
      bodyarr.push(chunk);
    })  
    req.on('end', function(){
      console.log( bodyarr.join('') )
    })  
})

app.listen(config.port);
console.log('SNS Endpoint is listenning',config.port,'port');