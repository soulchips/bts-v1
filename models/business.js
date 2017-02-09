//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;
var Category = require('./category');
var Service = require('./service');
var Review = require('./review');

//Schema
var businessSchema = new mongoose.Schema({
    category: Category.categorySchema,
    services: [
    	Service.serviceSchema
    ],
    description: String,
    rating: Number,
    tags: [{
    	type: String
    }],
    reviews: [
    	Review.reviewSchema
    ],        
	company_name: {
		type: String,
		required: true
	},
	staff: Array,
	geolocation: {
		latitude: {
			type: String
		},
		longitude: {
			type: String
		}
	},
	company_emails: [{
		email: {
	    	type: String,
	    	required: true,
	    	match: /.+@.+\..+/,
	    	lowercase: true
	    },
		class: {
			type: String,
			required: true,
			enum: ['primary', 'secondary']
		}
	}],
	contact: Array,
	address: Object,
	auto_assign: {
		type: Boolean,
		default: true
	},
	lead_time: Number, //time in minutes
	operating_hours: Object, //{mon: {start: 8:00, end: 17:00}, ..}
	special_no_work_dates: Array,
	session_duration: Number, //time in minutes
	updated_at: { type: Date, default: Date.now },
	blocked_customers: Array //Array of customer IDs
});


//Return model
module.exports = restful.model('Clients', businessSchema);