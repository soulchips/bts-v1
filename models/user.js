//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var userSchema = new mongoose.Schema({
    name: {
    	type: String,
    	required: true,
    	lowercase: true
    },
    email: {
    	type: String,
    	required: true,
    	match: /.+@.+\..+/,
    	lowercase: true
    },
    phone: String,
    user_id: String
});


//Return model
module.exports = restful.model('Users', userSchema);