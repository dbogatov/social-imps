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

	// db.Article.findAll().then(function (articles) {
	// 	res.render('index', {
	// 		title: 'Generator-Express MVC',
	// 		articles: articles
	// 	});
	// });
});
