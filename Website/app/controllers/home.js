var express = require('express'),
	router = express.Router(),
	db = require('../models');

module.exports = function (app) {
	app.use('/', router);
};

router.get('/', function (req, res, next) {
	res.render('index', {
		title: "Home"
	});
});

router.get('/cookie', function (req, res, next) {
	res.render('cookie', { 
		title: "Cookie Consent"
	});
});

router.get('/minutes', function (req, res, next) {
	res.render('minutes', {
		title: "Meeting Minutes"
	});
});

router.get('/timeline', function (req, res, next) {
	res.render('timeline', {
		title: "BitCoin Timeline"
	});
});