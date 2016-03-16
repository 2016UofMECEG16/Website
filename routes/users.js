var express = require('express');
var router = express.Router();
var pool = require('../db');


/* POST users listing. */
router.post('/', function(req, res, next) {
	var email = req.body.email;	
	pool.getConnection(function(err, con){
		con.query('SELECT * FROM customers where Email=?', email, function(err, rows, fields){				
			if(rows.length != 0)
				res.render('users', {title: 'User', email: email, rows: rows});
			else
				res.render('users', {title: 'User', email: email, errorMessage: "Invalid email address"});
			con.release();
    	});      		
	});
	
    console.log(new Date());   
});

module.exports = router;
