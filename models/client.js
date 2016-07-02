//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var clientSchema = new mongoose.Schema({
    category: String,
    description: String,
    rating: Number, //0-5 stars
    tags: Array,
    reviews: Array,        
	company_name: String,
	staff: Array,
	geolocation: Object,
	company_emails: Array,
	contact: Array,
	address: Object,
	auto_assign: Boolean,
	lead_time: Number, //time in minutes
	operating_hours: Object, //{mon: {start: 8:00, end: 17:00}, ..}
	special_no_work_dates: Array,
	session_duration: Number, //time in minutes
	updated_at: { type: Date, default: Date.now },
	blocked_customers: Array //Array of customer IDs
});


//Return model
module.exports = restful.model('Clients', clientSchema);