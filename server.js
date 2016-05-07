var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');
var request = require('request');

var app = express();

app.use(express.static(path.join(__dirname, 'app')));



app.get('/api', function(req, res) {
	var url = 'http://www.kyleconkright.com/seetickets/';
	request.get(url+'slides.json', function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        var slides = JSON.parse(body);
	        for(var i in slides) {
				slides[i].image = url+slides[i].image;
			}
	        res.json(slides);
	    }
	});
	
});

//SLIDES API
// app.get('/api', function(req, res) {
// 	http.get('http://www.kyleconkright.com/seetickets/slides.json', function(response) {
// 	  console.log(response.statusCode);
// 	  // consume response baody
// 	  response.resume();
// 	}).on('error', function(e) {
// 	  console.log(e.message);
// 	});
// 	// var files = fs.readdirSync('http://www.kyleconkright.com/seetickets');
// 	var files = fs.readdirSync(__dirname+'/app/assets/slides/');
// 	var slides = {slides: []};
// 	for(var i in files) {
// 	  slides.slides.push('assets/slides/'+files[i]);
	  
// 	}
// 	res.json(slides);
// });


//DEFAULT TO ANGULAR IF NO SERVER ROUTES DEFINED
app.all('*', function(req, res) {
  res.sendFile('/app/index.html', { root: __dirname });
});

var port = process.env.PORT || 3000;
app.listen(port);