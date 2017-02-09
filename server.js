//Dependencies
var express = require('express');
var app = express();
var jwt = require('express-jwt');
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser');
var cors = require('cors');


var auth0Secret = process.env.auth0Secret || 'place_secret_here';
var auth0ClientID = process.env.auth0ClientID || 'place_clientID_here';

//auth0 security
// will require an auth0 account to be set up. visit https://auth0.com/ for more info
var jwtCheck = jwt({
	secret: new Buffer(auth0Secret, 'base64'),
	audience: auth0ClientID
});

//MongoDB
mongoose.connect('mongodb://demodbuser:demodbpassword@ds147599.mlab.com:47599/bts-demo');

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.use(cors());


//Routes
app.get('/', function(req, res) {
	res.send('api working');
});

app.use('/api', require('./routes/api'));
// app.use('/api', jwtCheck, require('./routes/api')); //uncomment this line to use auth0 JWT authentication.



//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('BTS server API is running on port:', PORT);