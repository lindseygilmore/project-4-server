var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var axios = require('axios');
var cors = require('cors');


require('dotenv').config();

var Yelp = require('yelp');


var yelp = new Yelp({
	consumer_key: process.env.CONSUMER_KEY, 
	consumer_secret: process.env.CONSUMER_SECRET,
	token: process.env.TOKEN,
	token_secret: process.env.TOKEN_SECRET,
});

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/eat', function(req, res){


    axios.get("https://api.yelp.com/v3/businesses/search?location=chicago&term=restaurants", {headers: {'Authorization': 'Bearer ' + process.env.TOKEN}} )

    .then(function(response){
        console.log(response)
        res.send(response.data)
     }).catch(function(err){
     	console.log(err);
     	res.send(err);
     })
	});



server.listen(3000, function(){
	console.log("listening on port 3000")
})