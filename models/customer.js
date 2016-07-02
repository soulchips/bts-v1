//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var customerSchema = new mongoose.Schema({
	name: String,
	given_name: String,
	family_name: String,
	email: String,
	email_verified: Boolean,
	contact: Array,
	address: Object,
	updated_at: { type: Date, default: Date.now },
	clientID: String,
	gender: String,
	user_id: String,
	identities: Array,
	past_companies_visited: Array //Array of client IDs
});


//Return model
module.exports = restful.model('Customers', customerSchema);