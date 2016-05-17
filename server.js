var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var request = require('request');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));


var url = 'http://cdn.seeticketsus.com/';


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
	request(url+'about.html').pipe(res);
});

app.get('/api/solutions', function(req, res) {
	request(url+'solutions.html').pipe(res);
});


app.get('/api/insights', function(req, res) {
	request(url+'insights.html').pipe(res);
});


app.get('/api/partners', function(req, res) {
	request.get(url+'partners.json', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        var data = JSON.parse(body);
            for(var i in data.partners) {
            	for(var j in data.partners[i].brands) {
	    			data.partners[i].brands[j].logo = url+'partners/'+data.partners[i].brands[j].logo;
	    		}
    		}
	        res.json(data);
	    }
	});
});

app.get('/api/contact', function(req, res) {
	request(url+'contact.html').pipe(res);
});


app.get('/api/didyouknow', function(req, res) {
	request.get(url+'didyouknow.json', function (error, response, body) {
		res.json(JSON.parse(body));
	});
});



//DEFAULT TO ANGULAR IF NO SERVER ROUTES DEFINED
app.all('*', function(req, res) {
  res.sendFile('/public/index.html', { root: __dirname });
});

var port = process.env.PORT || 3000;
app.listen(port);