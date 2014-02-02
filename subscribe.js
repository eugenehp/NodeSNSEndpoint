var AWS = require('aws-sdk');
var config = require('./config.json');
AWS.config.loadFromPath('./credentials.json');

var SNS = new AWS.SNS();

function callback(err,data){
	console.log('\n=====ERROR=====\n');
	console.log(err);
	console.log('\n=====DATA=====\n');
	console.log(data);
}

SNS.subscribe({
	TopicArn: config.TopicArn,
	Protocol: 'http',
	Endpoint: config.Endpoint
},callback);