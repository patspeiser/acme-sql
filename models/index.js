var db = require('../db');

module.exports = {
	getCategory: getCategory,
	getCategories: getCategories,
	getProducts: getProducts,
	addCategory: addCategory,
	addProduct: addProduct,
	deleteCategory: deleteCategory,
	deleteProduct: deleteProduct
}

////////////////////
// category stuff //
///////////////////

//get single category by ID
function getCategory(categoryId, cb){
	console.log('getCategory()');
	db.connect(function(conn){
		conn.query('select * from categories where id = $1', [categoryId], function(err, result){
			if (err) throw err;
			cb(result.rows);
		})
	});
};

// get all categories
function getCategories(cb){
	console.log('getCategories()');
	db.connect(function(conn){
		conn.query('select * from categories', [], function(err, result){
			if (err) throw err;
			cb(result.rows);
		})
	});	
};

//add a  category
function addCategory(newCategory, cb){
	console.log('addCategory()');
	db.connect(function(conn){
		conn.query('insert into categories (name) values($1) returning id', [newCategory], function(err, result){
			if (err) throw err;
			cb(result);
		});
	});
};

//delete a category
function deleteCategory(categoryId, cb){
	console.log('delete category w/ id', categoryId);
	db.connect(function(conn){
		conn.query('delete from categories where id = $1', [categoryId], function(err, result){
			if (err) throw err;
			cb();
		});
	});
};

///////////////////
// product stuff//
//////////////////

//get all products for category
function getProducts(categoryId, cb){
	console.log('get products in category', categoryId);
	db.connect(function(conn){
		conn.query('select * from products where category_id = $1', [categoryId], function(err, result){
			if(err) throw err;
			cb(result.rows);
		});
	})
};

// add a product
function addProduct(productName, categoryId, cb){
	console.log('add product', productName);
	db.connect(function(conn){
		conn.query('insert into products (name, category_id) values ($1, $2)', [productName, categoryId], function(err, result){
			if (err) throw err;
			cb();
		}) 
	});
};

//delete a product
function deleteProduct(productId, cb){
	console.log('delete product', productId);
	db.connect(function(conn){
		conn.query('delete from products where id = $1', [productId], function(err, result){
			if (err) throw err;
			cb();
		});
	});
}
	
