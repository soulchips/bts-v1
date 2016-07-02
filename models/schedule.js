//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var scheduleSchema = new mongoose.Schema({
	client_id: String, //ID of the company
	customer_id: String, //ID of the customer
	company_name: String, //Company's name
	customer_name: String, //Customer's name
	date: Date,
	time: String,
	notes: String, //any special notes about the session
	session_duration: Number, //time in minutes
	cancelled: Boolean,
	updated_at: { type: Date, default: Date.now }
});


//Return model
module.exports = restful.model('Schedules', scheduleSchema);