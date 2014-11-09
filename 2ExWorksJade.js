var express = require('express'),
	path = require('path');

var app = express();

console.log(__dirname);

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/home', function(req, res) {
	res.render('indexA2', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);


// #########################################
// **********EXPRESSWORKS ANSWER************
// #########################################

//   var express = require('express')
//   var app = express()
//   app.set('view engine', 'jade')
//   app.set('views', process.argv[3])
//   app.get('/home', function(req, res) {
//     res.render('index', {date: new Date().toDateString()})
//   })
//   app.listen(process.argv[2])
