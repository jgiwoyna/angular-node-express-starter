require('dotenv').config();
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var portDecision = process.env.PORT || 3000;
var request = require('request');
var http = require('http');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(path.resolve('./server/public/views/index.html'));
});



var options = {
	host: 'https://animalrestapi.azurewebsites.net',
	path: '/Animal/Authenticate',
	headers: {
		'content-type': 'application/x-www-form-urlencoded'
	},
	method: 'POST'
}

var postData = {
	candidateID: 'c11b6475-0d0d-4bac-aece-2e12d42980ed'
}

var postReq = http.request(options, function(req, res) {
	console.log(res);
});

postReq.write(postData);
postReq.end();




app.use(express.static('server/public'));

app.listen(portDecision, function(){
  console.log('running on port', portDecision);
});
