//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});


//Return model
module.exports = restful.model('Services', serviceSchema);
module.exports.serviceSchema = serviceSchema;