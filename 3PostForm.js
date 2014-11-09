var express = require('express'),
	path = require('path'),
	bodyparser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

 app.use(bodyparser.urlencoded({extended: false}))

app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()});
});

app.get('/form', function(req, res) {
	res.render('form');
});

app.post('/form', function(req, res) {
	var string = req.body.str.split('').reverse().join('');
	res.send(string);
});

console.log(process.argv[2]);

app.listen(process.argv[2]);
