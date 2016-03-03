var express = require('express');
var router = express.Router();
var pool = require('../db');

router.post('/', function(req, res, next) {	
	var email = req.body.email;			
	var amount = req.body.amount;
	pool.getConnection(function(err,con){		
		con.query('SELECT Balance FROM customers WHERE Email=?', email, function(err, rows, fields){
			var balance = rows[0].Balance;
			res.render('add', { title: 'Add credits', email: email, balance: balance, amount: amount});
			con.release();
		});	
	});
	

	console.log(new Date());
});

module.exports = router;
