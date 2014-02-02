var express = require('express');
app = express();
var port = 8080;

app.get('/request',function(req,res){
res.end('test');
});

app.listen(port);
console.log('SNS Endpoint is listenning',port,'port');
