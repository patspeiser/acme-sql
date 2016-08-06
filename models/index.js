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
var getCategory = function(categoryId){
};

// get all categories
var getCategories = function(callback){
	db.connect(function(conn){
		conn.query('select * from categories', [], function(err, result){
			if(err) throw err;
			if(result.rows.length > 0)
				callback(result.rows);
		})
	});
};

//add a  category
var addCategories = function(){
};

//delete a category
var deleteCategory = function(){
};

///////////////////
// product stuff//
//////////////////

//get all products for category
var getProducts = function(categoryId){
};

// add a product
var addProduct = function(categoryID, productName){
};

//delete a product
var deleteProduct = function(productId){
}
