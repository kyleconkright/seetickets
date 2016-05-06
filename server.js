var express = require('express');
var path = require('path');
var fs = require('fs');
var http = require('http');

var app = express();

app.use(express.static(path.join(__dirname, 'app')));


//SLIDES API
app.get('/api', function(req, res) {
	// http.get('http://www.kyleconkright.com/seetickets', function(response) {
	//   console.log(response.statusCode);
	//   // consume response body
	//   response.resume();
	// }).on('error', function(e) {
	//   console.log(e.message);
	// });
	// var files = fs.readdirSync('http://www.kyleconkright.com/seetickets');
	var files = fs.readdirSync(__dirname+'/app/assets/slides/');
	var slides = {slides: []};
	for(var i in files) {
	  slides.slides.push('assets/slides/'+files[i]);
	  
	}
	res.json(slides);
});


//DEFAULT TO ANGULAR IF NO SERVER ROUTES DEFINED
app.all('*', function(req, res) {
  res.sendFile('/app/index.html', { root: __dirname });
});

var port = process.env.PORT || 3000;
app.listen(port);