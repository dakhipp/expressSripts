var express = require('express'),
	path = require('path'),
	crypto = require('crypto');

var app = express();

app.use(express.static(path.join(__dirname, 'publicA5')));


// app.set('views', __dirname + '/publicA5');
// app.engine('html', require('ejs').renderFile);

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index');
});

app.put('/message/:id', function(req, res) {
	var id = req.params.id;
	var crypted = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex');
	res.render(crypted);
})

console.log(process.argv[2]);

app.listen(process.argv[2]);