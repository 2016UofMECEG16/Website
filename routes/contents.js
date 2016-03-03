var express = require('express');
var router = express.Router();
var pool = require('../db');

router.get('/', function(req, res, next) {
	pool.getConnection(function(err, con){
		con.query('SELECT LPAD(CID,10,0) AS CID, Dev, Balance, Email, LastUpdated, DATE_FORMAT(LastUpdated, "%Y%m%d%H%i%s") AS Sort FROM customers', function(err, rows, fields){
			res.render('contents', { title: 'Database Contents:', rows: rows});	
			con.release();
    	});      
	});	
    console.log(new Date());	
});

router.post('/', function(req, res, next) {
	if(typeof(req.body.delete) !== 'undefined'){
		pool.getConnection(function(err, con){
		con.query('delete from customers', function(err, rows, fields){			
			con.release();
    	});      
	});	
	}

	pool.getConnection(function(err, con){
		con.query('SELECT LPAD(CID,10,0) AS CID, Dev, Balance, Email, LastUpdated, DATE_FORMAT(LastUpdated, "%Y%m%d%H%i%s") AS Sort FROM customers', function(err, rows, fields){
			res.render('contents', { title: 'Database Contents:', rows: rows});	
			con.release();
    	});      
	});	
    console.log(new Date());	
});


module.exports = router;
