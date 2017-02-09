//Dependencies
var express = require('express');
var router = express.Router();
var cors = require('cors');

var whitelist = ['http://localhost:5000/','http://localhost:5001/', 'http://localhost'];
var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};

router.use(cors(corsOptions));


//Models
var customer = require('../models/customer');
var business = require('../models/business');
var schedule = require('../models/schedule');
var staff = require('../models/staff');
var category = require('../models/category');
var user = require('../models/user');


//Routes
customer.methods(['get', 'put', 'post', 'delete']);
customer.register(router, '/customers');

business.methods(['get', 'put', 'post', 'delete']);
business.register(router, '/businesses');

schedule.methods(['get', 'put', 'post', 'delete']);
schedule.register(router, '/schedules');

staff.methods(['get', 'put', 'post', 'delete']);
staff.register(router, '/staff');

category.methods(['get', 'put', 'post', 'delete']);
category.register(router, '/categories');

category.methods(['get', 'put', 'post', 'delete']);
user.register(router, '/users');





//QUERY APIs

//customer login
router.post('/customers/login', function(req, res, next) {

	console.log("login attempt ", req.body);
	
	if((Object.keys(req.body).length === 0) && (req.body.constructor === Object))
	{
		res.send('no user object');
		return;
	}

	var user_id = req.body.user_id;
	if(user_id == null)
	{
		res.send('no user_id');
		return;
	}
  	customer.findOne({"user_id": user_id},function (err, doc) {
	    if (err) return next(err);
	    console.log("doc results ", doc);
	    
	    if((doc == []) || (doc == null))
	    {
	    	//register new customer
			customer.create(req.body, function (err, post) {
				if (err) return next(err);
				res.json(post);
			});
	    }
	    else
	    {
	    	res.json(doc);
	    }
  	});
});

//client search
router.post('/clients/search/', function(req, res, next) {

	console.log("client search attempt ", req.body);
	
  	client.find(req.body,function (err, doc) {
	    if (err) return next(err);

	    res.json(doc);
  	});
});

//schedule search
router.post('/schedule/search/', function(req, res, next) {

	console.log("schedule search attempt ", req.body);

	if((Object.keys(req.body).length === 0) && (req.body.constructor === Object))
	{
		res.send('no search object');
		return;
	}
	
  	schedule.find(req.body,function (err, doc) {
	    if (err) return next(err);

	    res.json(doc);
  	});
});

//schedule search by date
router.post('/schedule/search/dates', function(req, res, next) {

	console.log("schedule search attempt ", req.body);

	if((Object.keys(req.body).length === 0) && (req.body.constructor === Object))
	{
		res.send('no search object');
		return;
	}

	if('start' in res.body)
	{
		var from = res.body.start
	}
	else
	{
		res.send('no start date');
		return;
	}

	if('end' in res.body)
	{
		var to = res.body.end
	}
	else
	{
		res.send('no end date');
		return;
	}
	
  	schedule.find({
  		date: {
  	        $gte: from,
  	        $lt: to
  	    }
  	},function (err, doc) {
	    if (err) return next(err);

	    res.json(doc);
  	});
});




//Return router
module.exports = router;