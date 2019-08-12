var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('views'));

app.get('/', function (req, res) {
	res.render('main-index', {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	});
});

app.get('/auth/google', function(req, res){
	res.render('login-google');
});

var server = app.listen(3000, "localhost", function() {
	var host = server.address().address;
	var port = server.address().port;
});