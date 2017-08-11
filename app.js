var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

var Yelp = require('yelp');

var yelp = new Yelp({
	consumer_key: process.env.CONSUMER_KEY, 
	consumer_secret: process.env.CONSUMER_SECRET,
	token: process.env.TOKEN,
	token_secret: process.env.TOKEN_SECRET,
});


app.use(express.static(path.join(__dirname, 'public')));


yelp.search({ term: 'food', location: 'Chicago' })
	.then(function(data){
		console.log(data);
	})
	.catch(function(err){
		console.log(err);
	});


app.get('/eat', function(req, res){

})