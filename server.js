//Dependencies
var express = require('express');
var app = express();
var jwt = require('express-jwt');
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser');
var cors = require('cors');

//auth0 security
var jwtCheck = jwt({
	secret: new Buffer('1lJ5cdg4X_AKZ_tj81IldCt5rDFOzR0X04FvwSvTcRBqnbnmsWBrIfL0GNE5e7BZ', 'base64'),
	audience: 'iIy5K1c0kTqHj5WlYBhK145zgn8lk1W0'
});

//MongoDB
//mongoose.connect('mongodb://localhost/bts_data');
mongoose.connect('mongodb://dbadmin:AwetechDev1@ds019658.mlab.com:19658/bts_data');

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.use(cors());


//Routes
app.get('/', function(req, res) {
	res.send('api working');
});

app.use('/api', jwtCheck, require('./routes/api'));


//Start Server
app.listen(3000);
console.log('BTS server API is running on port 3000');