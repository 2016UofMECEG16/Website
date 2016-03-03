var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {	
	res.render('index', { title: 'G16\'s E-Pass Website'});      	
	console.log(new Date());
});

module.exports = router;
