var express = require('express');
var app = express();
var Acme = require('./models/index.js');
var swig = require('swig');
var routes = require('./routes/categories.js');
var bodyParser = require('body-parser');

swig.setDefaults({ cached: false });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/node_modules/'));

app.get('/', function(req, res){
	Acme.getCategories(function(categories){
	res.render('index', { categories: categories }) 	
	})
});

app.use('/categories', routes);

module.exports = app;
