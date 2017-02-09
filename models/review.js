//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var reviewSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
        //create function to update business rating whenever review is added/edited
    }
});


//Return model
module.exports = restful.model('Reviews', reviewSchema);
module.exports.reviewSchema = reviewSchema;