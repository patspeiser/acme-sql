var Acme = require('../models/index.js');
var router = require('express').Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = router;

router.get('/:category', function(req, res){
	Acme.getProducts(req.params.category, function(products){
		var products = products;
  	 Acme.getCategories(function(categories){
			var categories = categories;
			res.render('category', { products: products, categories: categories })
		});
	});
})

router.post('/', function(req, res){
	Acme.addProduct(req.body.newCategory, function(){
		res.direct('back');
	});
});
