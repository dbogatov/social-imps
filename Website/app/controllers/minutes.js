var express = require('express'),
	router = express.Router(),
	db = require('../models');

module.exports = function (app) {
	app.use('/', router);
};

router.get('/minutes', function (req, res, next) {
	res.render('minutes', {
		title: "Meeting Minutes"
	});
});
