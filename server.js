var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'app')));

// app.get('/about', function (req, res) {
//     res.sendFile('/app/index.html');
// });

var port = process.env.PORT || 3000;
app.listen(port);