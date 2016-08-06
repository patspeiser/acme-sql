var express = require('express');
var app = express();
var Acme = require('./models/index.js');
var swig = require('swig');
var methodOverride = require('method-override');
var routes = require('./routes/categories.js');

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


app.listen(process.env.PORT, function(){
	console.log('listening on ... ' + process.env.PORT);
});


