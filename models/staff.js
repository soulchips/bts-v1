//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var staffSchema = new mongoose.Schema({
	name: String,
	given_name: String,
	family_name: String,
	email: String,
	email_verified: Boolean,
	contact: Array,
	address: Object,
	client_id: String,
	position: String,
	roles: Array,
	updated_at: { type: Date, default: Date.now }
});


//Return model
module.exports = restful.model('Staff', staffSchema);