var express = require('express');
var router = express.Router();
var pool = require('../db');

router.post('/', function(req, res, next) {	
	var email = req.body.email;		
	pool.getConnection(function(err, con){
		con.query('SELECT LPAD(CID,10,0) AS CID, Dev, Action, Balance, BalanceChanges, Email, Updated FROM customers_history WHERE Email=? ORDER BY Updated DESC', email, function(err, rows, fields){
			if(rows.length == 0)
				res.render('history', { title: 'Transaction History', rows: rows, email: email, error: 'Invalid email address.'});		
			else
				res.render('history', { title: 'Transaction History', rows: rows, email: email});
			con.release();
    	});   
	});
    console.log(new Date());   	
});

module.exports = router;
