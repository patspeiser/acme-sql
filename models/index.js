var db = require('../db');

module.exports = {
	getCategory: getCategory,
	getCategories: getCategories,
	getProducts: getProducts,
	addCategories: addCategories,
	addProduct: addProduct,
	deleteCategory: deleteCategory,
	deleteProduct: deleteProduct
}

////////////////////
// category stuff //
///////////////////

//get single category by ID
function getCategory(categoryId){
};

// get all categories
function getCategories(cb){
	db.connect(function(conn){
		conn.query('select * from categories', [], function(err, result){
			if (err) throw err;
			cb(result.rows);
		})
	});	
};

//add a  category
function addCategories(newCategory, cb){
	db.connect(function(conn){
		conn.query('insert into categories (name) vaues($1)', [newCategory], function(err, result){
			if (err) throw err;
			return 1;
		});
	});
};

//delete a category
function deleteCategory(){
};

///////////////////
// product stuff//
//////////////////

//get all products for category
function getProducts(categoryId, cb){
	db.connect(function(conn){
		conn.query('select * from products where category_id = $1', [categoryId], function(err, result){
			if(err) throw err;
			cb(result.rows);
		});
	})
};

// add a product
function addProduct(productName, categoryId){
	db.connect(function(conn){
		conn.query('insert into products (name, category_id) values ($1, $2)', [productName, categoryId], function(err, result){
			if (err) throw err;
			return 1;
		}) 
	});
};

//delete a product
function deleteProduct(productId){
}
