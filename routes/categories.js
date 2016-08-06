var Acme = require('../models/index.js');
var router = require('express').Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = router;

router.use(bodyParser.urlencoded({ extended: false }) );
router.use(methodOverride('_method'));

router.get('/:category', function(req, res){
	Acme.getProducts(req.params.category, function(products){
		var products = products;
  	 Acme.getCategories(function(categories){
			var categories = categories;
			res.render('category', { products: products, categories: categories, category: req.params.category })
		});
	});
})

router.post('/', function(req, res){
	Acme.addCategory(req.body.newCategory, function(result){
		res.redirect('/categories/' + result.rows[0].id);
	})
});

router.post('/:categoryId', function(req, res){
	Acme.addProduct(req.body.newProduct, req.params.categoryId, function(){
		res.redirect('back');
	});
})

router.delete('/:categoryId/products/:productId', function(req, res){
	Acme.deleteProduct(req.params.productId, function(){
		res.redirect('back');
	});
});

router.delete('/:categoryId', function(req, res){
	Acme.deleteCategory(req.params.categoryId, function(){
		res.redirect('/');
	});
});
