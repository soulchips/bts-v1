//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var categorySchema = new mongoose.Schema({
    _id: {
    	type: String,
    	required: true
    },
    description: String,
    icon: String,
    parent: {
    	type: String,
    	ref: 'Category'
    },
    ancestors: [{
    	type: String,
    	ref: 'Category'
    }]
});


//Return model
module.exports = restful.model('Categories', categorySchema);
module.exports.categorySchema = categorySchema;