var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'app')));

app.all('*', function(req, res) {
  res.sendFile('/app/index.html', { root: __dirname });
});

var port = process.env.PORT || 3000;
app.listen(port);