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

app.post('/receive', client);

app.listen(config.port);
console.log('SNS Endpoint is listenning',config.port,'port');

// var SNS = new AWS.SNS();

// function callback(err,data){
// 	console.log('\n=====ERROR=====\n');
// 	console.log(err);
// 	console.log('\n=====DATA=====\n');
// 	console.log(data);
// }

// SNS.subscribe({
// 	TopicArn: config.TopicArn,
// 	Protocol: 'http',
// 	Endpoint: config.Endpoint
// },callback);