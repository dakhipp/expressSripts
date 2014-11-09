var express = require('express'),
	path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'publicA4')));


app.set('views', __dirname + '/publicA4');
app.engine('html', require('ejs').renderFile);

// app.set('views', path.join(__dirname, 'templates'));
// app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('indexAA4.html');
});

console.log(process.argv[2]);

app.listen(process.argv[2]);

