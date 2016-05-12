var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var request = require('request');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));


var url = 'http://www.kyleconkright.com/seetickets/';


app.get('/api/slides', function(req, res) {
	
	request.get(url+'slides.json', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        var slides = JSON.parse(body);
	        for(var i in slides) {
				slides[i].image = url+'slides/'+slides[i].image;
			}
	        res.json(slides);
	    }
	});
});

app.get('/api/about', function(req, res) {
	request.get(url+'about.json', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        var data = JSON.parse(body);
	        res.json(data);
	    }
	});
});

app.get('/api/partners', function(req, res) {
	request.get(url+'partners.json', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        var data = JSON.parse(body);
	        res.json(data);
	    }
	});
});





//DEFAULT TO ANGULAR IF NO SERVER ROUTES DEFINED
app.all('*', function(req, res) {
  res.sendFile('/public/index.html', { root: __dirname });
});

var port = process.env.PORT || 3000;
app.listen(port);